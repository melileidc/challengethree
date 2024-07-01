def calculate_tax(gross_salary):
    tax = 0
    remaining_salary = gross_salary

    if remaining_salary > 24000:
        tax += 24000 * 0.10
        remaining_salary -= 24000
    else:
        tax += remaining_salary * 0.10
        return tax
    
    if remaining_salary > 8333:
        tax += 8333 * 0.15
        remaining_salary -= 8333
    else:
        tax += remaining_salary * 0.15
        return tax

    if remaining_salary > 8333:
        tax += 8333 * 0.20
        remaining_salary -= 8333
    else:
        tax += remaining_salary * 0.20
        return tax

    if remaining_salary > 8333:
        tax += 8333 * 0.25
        remaining_salary -= 8333
    else:
        tax += remaining_salary * 0.25
        return tax

    tax += remaining_salary * 0.30

    return tax

def calculate_nhif(gross_salary):
    if gross_salary <= 5999:
        return 150
    elif gross_salary <= 7999:
        return 300
    elif gross_salary <= 11999:
        return 400
    elif gross_salary <= 14999:
        return 500
    elif gross_salary <= 19999:
        return 600
    elif gross_salary <= 24999:
        return 750
    elif gross_salary <= 29999:
        return 850
    elif gross_salary <= 34999:
        return 900
    elif gross_salary <= 39999:
        return 950
    elif gross_salary <= 44999:
        return 1000
    elif gross_salary <= 49999:
        return 1100
    elif gross_salary <= 59999:
        return 1200
    elif gross_salary <= 69999:
        return 1300
    elif gross_salary <= 79999:
        return 1400
    elif gross_salary <= 89999:
        return 1500
    elif gross_salary <= 99999:
        return 1600
    else:
        return 1700

def calculate_nssf(gross_salary):
    return min(0.06 * gross_salary, 400)

def main():
    try:
        basic_salary = float(input("Enter basic salary (Ksh): "))
        benefits = float(input("Enter benefits (Ksh): "))

        gross_salary = basic_salary + benefits

        tax = calculate_tax(gross_salary)
        nhif = calculate_nhif(gross_salary)
        nssf = calculate_nssf(gross_salary)

        net_salary = gross_salary - (tax + nhif + nssf)

        print(f"Gross Salary: Ksh {gross_salary:.2f}")
        print(f"PAYE (Tax): Ksh {tax:.2f}")
        print(f"NHIF Deductions: Ksh {nhif:.2f}")
        print(f"NSSF Deductions: Ksh {nssf:.2f}")
        print(f"Net Salary: Ksh {net_salary:.2f}")

    except ValueError:
        print("Please enter valid numeric values for salary and benefits.")

if __name__ == "__main__":
    main()
