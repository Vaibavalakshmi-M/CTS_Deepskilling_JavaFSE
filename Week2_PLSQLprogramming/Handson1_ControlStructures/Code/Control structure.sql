CREATE TABLE customers (
    customer_id   NUMBER PRIMARY KEY,
    name          VARCHAR2(100),
    age           NUMBER,
    balance       NUMBER,
    is_vip        CHAR(1),
    interest_rate NUMBER
);

CREATE TABLE loans (
    loan_id       NUMBER PRIMARY KEY,
    customer_id   NUMBER,
    due_date      DATE,
    interest_rate NUMBER,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO customers VALUES (1, 'Alice', 65, 15000, 'N', 8.5);
INSERT INTO customers VALUES (2, 'Bob', 45, 9000, 'N', 7.0);
INSERT INTO customers VALUES (3, 'Charlie', 70, 11000, 'N', 6.5);

INSERT INTO loans VALUES (101, 1, SYSDATE + 10, 8.5);
INSERT INTO loans VALUES (102, 2, SYSDATE + 40, 7.0);
INSERT INTO loans VALUES (103, 3, SYSDATE + 20, 6.5);

COMMIT;

SET SERVEROUTPUT ON;

BEGIN
  FOR cust_rec IN (SELECT customer_id, interest_rate FROM customers WHERE age > 60) LOOP
    UPDATE customers
    SET interest_rate = interest_rate - 1
    WHERE customer_id = cust_rec.customer_id;
  END LOOP;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Discount applied to senior citizens.');
END;
/

BEGIN
  FOR cust_rec IN (SELECT customer_id FROM customers WHERE balance > 10000) LOOP
    UPDATE customers
    SET is_vip = 'Y'
    WHERE customer_id = cust_rec.customer_id;
  END LOOP;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('VIP flags updated.');
END;
/

BEGIN
  FOR loan_rec IN (
    SELECT l.loan_id, c.name, l.due_date
    FROM loans l
    JOIN customers c ON l.customer_id = c.customer_id
    WHERE l.due_date <= SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan_rec.loan_id || 
                         ' for customer ' || loan_rec.name || 
                         ' is due on ' || TO_CHAR(loan_rec.due_date, 'DD-MON-YYYY'));
  END LOOP;
END;
/