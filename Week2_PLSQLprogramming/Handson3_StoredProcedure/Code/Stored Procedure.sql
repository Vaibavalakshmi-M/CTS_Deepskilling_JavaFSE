CREATE TABLE savings_accounts (
    account_id   NUMBER PRIMARY KEY,
    customer_id  NUMBER,
    balance      NUMBER
);

CREATE TABLE employees (
    emp_id       NUMBER PRIMARY KEY,
    name         VARCHAR2(100),
    department   VARCHAR2(50),
    salary       NUMBER
);

CREATE TABLE bank_accounts (
    account_id   NUMBER PRIMARY KEY,
    customer_id  NUMBER,
    balance      NUMBER
);

INSERT INTO savings_accounts VALUES (1, 101, 10000);
INSERT INTO savings_accounts VALUES (2, 102, 20000);

INSERT INTO employees VALUES (1, 'Alice', 'HR', 50000);
INSERT INTO employees VALUES (2, 'Bob', 'IT', 60000);
INSERT INTO employees VALUES (3, 'Charlie', 'IT', 55000);

INSERT INTO bank_accounts VALUES (1, 201, 5000);
INSERT INTO bank_accounts VALUES (2, 202, 3000);

COMMIT;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  FOR acc IN (SELECT account_id, balance FROM savings_accounts) LOOP
    UPDATE savings_accounts
    SET balance = balance + (balance * 0.01)
    WHERE account_id = acc.account_id;
  END LOOP;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all savings accounts.');
END;
/

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  dept_name IN VARCHAR2,
  bonus_pct IN NUMBER
) IS
BEGIN
  UPDATE employees
  SET salary = salary + (salary * bonus_pct / 100)
  WHERE department = dept_name;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Bonus updated for department: ' || dept_name);
END;
/

BEGIN
  UpdateEmployeeBonus('IT', 10);  -- 10% bonus to IT department
END;
/

CREATE OR REPLACE PROCEDURE TransferFunds(
  from_account_id IN NUMBER,
  to_account_id   IN NUMBER,
  amount          IN NUMBER
) IS
  from_balance NUMBER;
BEGIN
  -- Get balance of source account
  SELECT balance INTO from_balance
  FROM bank_accounts
  WHERE account_id = from_account_id
  FOR UPDATE;

  -- Check sufficient balance
  IF from_balance < amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
  END IF;

  -- Deduct from source
  UPDATE bank_accounts
  SET balance = balance - amount
  WHERE account_id = from_account_id;

  -- Add to destination
  UPDATE bank_accounts
  SET balance = balance + amount
  WHERE account_id = to_account_id;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Transfer completed from account ' || from_account_id || ' to ' || to_account_id);
END;
/

SET SERVEROUTPUT ON;

BEGIN
  TransferFunds(1, 2, 100);
END;
/

SELECT * FROM bank_accounts;