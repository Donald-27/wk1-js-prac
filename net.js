function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;

    // PAYE Tax Calculation
    let payee = 0;
    if (grossSalary <= 24000) payee = grossSalary * 0.1;
    else if (grossSalary <= 32333) payee = 2400 + (grossSalary - 24000) * 0.25;
    else if (grossSalary <= 500000) payee = 2400 + 2083.25 + (grossSalary - 32333) * 0.3;
    else if (grossSalary <= 800000) payee = 2400 + 2083.25 + 140500.1 + (grossSalary - 500000) * 0.325;
    else payee = 2400 + 2083.25 + 140500.1 + 97500 + (grossSalary - 800000) * 0.35;
 

    // Other Deductions

    let shif = grossSalary * 0.0275; //SHIF deductions
    let nssf = Math.min(grossSalary, 8000) * 0.06; //NSSF deductions
    let housingLevy = grossSalary * 0.015;

    let netSalary = grossSalary - (payee + shif + nssf + housingLevy);
    return netSalary;
}
{
  // Total Deductions
  let totalDeductions = tax + shif + nssf + housingLevy;
  let netSalary = grossSalary - totalDeductions; //net salary
    return netSalary;
}
