package com.cognizant.countrylookup.service;

import com.cognizant.countrylookup.model.Country;
import com.cognizant.countrylookup.model.Countries;
import jakarta.annotation.PostConstruct;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.Unmarshaller;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.List;

@Service
public class CountryService {

    private List<Country> countryList;

    @PostConstruct
    public void init() throws Exception {
        InputStream input = new ClassPathResource("country.xml").getInputStream();
        JAXBContext context = JAXBContext.newInstance(Countries.class);
        Unmarshaller unmarshaller = context.createUnmarshaller();
        Countries countries = (Countries) unmarshaller.unmarshal(input);
        countryList = countries.getCountry();
    }

    public Country getCountry(String code) {
        return countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }
}
