//JS BEGINS
const DECIMAL_PLACE = 0;
const PERCENT_DECIMAL_PLACE = 2;
//$("#btnCalculateFinanceReturn").disabled=false;
jQuery(document).ready(function($) {
    
    // Calculate function is used to make the whole application dynamic
    var calculate = function() {
        var flag = 0
        //BUTTON 1 Begins
        //FIRST Button Validation
        // var Purchase_Price is used to check that The input is Negative or Zero, then show an error
        var Purchase_Price = parseFloat($("#Purchase_Price").val());
        div = $('#Purchase_Price').closest('.error-holder');
        ////console.log("Purchase_Price Validation",($("#Purchase_Price").val()).length);
        if (Purchase_Price <= 0 || ($("#Purchase_Price").val()).length == 0) { //alert("purchase price can't be zero or Empty"); 
            flag++;

            $(div).find('.error').remove();
            $(div).append('<span class="error">Purchase Price can not be Empty or can have a Negative value</span>');
            return;
        } else {
            $(div).find('.error').remove();

        }


        // var Monthly_Rent is used to check that The input is Negative or Zero, then show an error
        var Monthly_Rent = parseFloat($("#Monthly_Rent").val());
        div = $('#Monthly_Rent').closest('.error-holder');
        ////console.log("Monthly_Rent", Monthly_Rent);
        if (Monthly_Rent <= 0 || ($("#Monthly_Rent").val()).length == 0) { //alert("Monthly rent can't be zero or Empty"); 
            flag++;

            $(div).find('.error').remove();
            $(div).append('<span class="error">Monthly Rent can not be Empty or can have a Negative value</span>');
            return;
        } else {
            $(div).find('.error').remove();

        }


        
        // var Vacancy is used to check that The input is Negative or Zero, then show an error
        var Vacancy = parseFloat($("#Vacancy").val());
        div = $('#Vacancy').closest('.error-holder');
        //console.log("Vacancy", Vacancy);
        if (Vacancy <= 0 || ($("#Vacancy").val()).length == 0) { //alert("Vacancy can't be zero or Empty"); 
            flag++;
            $(div).find('.error').remove();
            $(div).append('<span class="error">Vacancy can not be Empty or can have a Negative value</span>');
            return;
        } else {
            $(div).find('.error').remove();

        }


        // var Taxes is used to check that The input is Negative, Zero or Greater than 100%, then show an error
        var Taxes = parseFloat($("#Taxes").val());
        div = $('#Taxes').closest('.error-holder');
        //console.log("Taxes", Taxes);
        if ($("#Taxes").val().length == 0 || Taxes <= 0 || Taxes > 100) { //alert("Tax can't be zero or Empty"); 
            flag++;
            $(div).find('.error').remove();
            $(div).append('<span class="error">Taxes  should be between range (1-100)</span>');
            return;
        } else {
            $(div).find('.error').remove();

        }
        
        // var Insurance is used to check that The input is Negative or NULL, then show an error
        var Insurance = parseFloat($("#Insurance").val());
        div = $('#Insurance').closest('.error-holder');
        //console.log("Insurance", Insurance);
        if (Insurance <= 0 || ($("#Insurance").val()).length == 0) { //alert("Insurance can't be zero or Empty");
            flag++;
            $(div).find('.error').remove();
            $(div).append('<span class="error">Insurance can not be Empty or can have a Negative value</span>');
            return;
        } else {
            $(div).find('.error').remove();

        }
        
        
        // var Repair_Maintenance_Cost is used to check that The input is Negative,NULL or Greater than 100%, then show an error
        var Repair_Maintenance_Cost = parseFloat($("#Repair_Maintenance_Cost").val());
        div = $('#Repair_Maintenance_Cost').closest('.error-holder');
        //console.log("Repair_Maintenance_Cost", Repair_Maintenance_Cost);
        if (($("#Repair_Maintenance_Cost").val()).length == 0 || Repair_Maintenance_Cost <= 0 || Repair_Maintenance_Cost > 100) { //alert("Repair_Maintenance_Cost can't be zero or Empty");
            flag++;
            $(div).find('.error').remove();
            $(div).append('<span class="error">Repair and Maintenance Cost should be between range(1-100)</span>');
            return;
        } else {
            $(div).find('.error').remove();

        }


        
        // var PM_Fees is used to check that The input is Negative,NULL or Greater than 100%, then show an error
        var PM_Fees = parseFloat($("#PM_Fees").val());
        div = $('#PM_Fees').closest('.error-holder');
        //console.log("PM_Fees", PM_Fees);
        if (($("#PM_Fees").val()).length == 0 || PM_Fees <= 0 || PM_Fees > 100) { //alert("PM_Fees can't be zero or Empty"); 
            flag++;
            $(div).find('.error').remove();
            $(div).append('<span class="error">Property maintenance Fees should be between (1-100)</span>');
            return;
        } else {
            $(div).find('.error').remove();

        }


        
        // var Leasing_Fees is used to check that The input is Negative,NULL or Greater than 1, then show an error
        var Leasing_Fees = parseFloat($("#Leasing_Fees").val());
        div = $('#Leasing_Fees').closest('.error-holder');
        //console.log(Leasing_Fees);
        if (Leasing_Fees < 0 || ($("#Leasing_Fees").val()).length == 0 || Leasing_Fees > 1) { //alert("Leasing_Fees can't be zero or Empty"); 
            flag++
            $(div).find('.error').remove();
            $(div).append('<span class="error">Leasing Fees should be between (0-1)</span>');
            return;
        } else {
            $(div).find('.error').remove();

        }

        //End of Validation for Button 1


        //Calculation for button 1 Begins

        //var o_Rent calculates the monthly rent
        var input1Val2 = $("#Monthly_Rent").val().split('.').join('');
        var input1Val3 = input1Val2.split(',').join('');


        var v_Monthly_Rent = parseFloat(input1Val3);
        var o_Rent = v_Monthly_Rent * 12;
        $("#o_rent").empty();
        $("#o_rent").append(
            $("<span>" + numberWithCommas(o_Rent.toFixed(DECIMAL_PLACE)) + "</span>")
        );

        //var o_Vacancy calculates the total cost of the days left Vacanct
        var v_Vacancy = parseFloat($("#Vacancy").val());
        var o_Vacancy = (v_Vacancy / 365) * o_Rent;
        $("#o_vacancy").empty();
        $("#o_vacancy").append(
            $("<span>" + numberWithCommas(o_Vacancy.toFixed(DECIMAL_PLACE)) + "</span>")
        );

        //var o_Net_Rent calculates the total net rent after substracting the vacancy, from the total yearly rent
        var o_Net_Rent =
            Math.round(o_Rent, DECIMAL_PLACE) -
            Math.round(o_Vacancy, DECIMAL_PLACE);
        $("#o_net_rent").empty();
        $("#o_net_rent").append(
            $("<span>" + numberWithCommas(o_Net_Rent.toFixed(DECIMAL_PLACE)) + "</span>")
        );

        //var o_Tax calculates the total taxes

        var input1Val2 = $("#Purchase_Price").val().split('.').join('');
        var input1Val3 = input1Val2.split(',').join('');

        console.log(input1Val3);

        var v_Purchase_Price = parseFloat(input1Val3);
        var v_Tax_Rate =
            parseFloat(
                $("#Taxes")
                .val()
                .replace("%", "")
            ) / 100;
        var o_Tax = v_Purchase_Price * v_Tax_Rate;
        $("#o_tax").empty();
        $("#o_tax").append(
            $("<span>" + numberWithCommas(o_Tax.toFixed(DECIMAL_PLACE)) + "</span>")
        );

        //var v_Insurance shows the input Insurance

        var input1Val2 = $("#Insurance").val().split('.').join('');
        var input1Val3 = input1Val2.split(',').join('');

        var v_Insurance = parseFloat(input1Val3);
        $("#o_insurance").empty();
        $("#o_insurance").append(
            $("<span>" + numberWithCommas(v_Insurance.toFixed(DECIMAL_PLACE)) + "</span>")
        );

        //o_Repair_Maintence calculates the  Repair Maintenance
        var v_Repair_Maintenance_Cost =
            parseFloat(
                $("#Repair_Maintenance_Cost")
                .val()
                .replace("%", "")
            ) / 100;
        var o_Repair_Maintence = v_Repair_Maintenance_Cost * o_Net_Rent;
        $("#o_repair_maintenance").empty();
        $("#o_repair_maintenance").append(
            $("<span>" + numberWithCommas(o_Repair_Maintence.toFixed(DECIMAL_PLACE)) + "</span>")
        );

        //var o_Property_Management calculates the Property Management
        var v_PM_Fees =
            parseFloat(
                $("#PM_Fees")
                .val()
                .replace("%", "")
            ) / 100;
        var o_Property_Management = v_PM_Fees * o_Net_Rent;
        $("#o_property_management").empty();
        $("#o_property_management").append(
            $("<span>" + numberWithCommas(o_Property_Management.toFixed(DECIMAL_PLACE)) + "</span>")
        );

        //var o_Leasing_Fees calculate the Leasing Fees
        var v_Leasing_Fees = parseFloat(
            $("#Leasing_Fees")
            .val()
            .replace("%", "")
        );

        var o_Leasing_Fees = v_Leasing_Fees * v_Monthly_Rent;
        $("#o_leasing_fees").empty();
        $("#o_leasing_fees").append(
            $("<span>" + numberWithCommas(o_Leasing_Fees.toFixed(DECIMAL_PLACE)) + "</span>")
        );

        //o_Total_Expenses calculates the Total expenses
        var o_Total_Expenses =
            o_Tax +
            v_Insurance +
            o_Repair_Maintence +
            o_Property_Management +
            o_Leasing_Fees;

        $("#o_total_expenses").empty();
        $("#o_total_expenses").append(
            $("<span>" + numberWithCommas(o_Total_Expenses.toFixed(DECIMAL_PLACE)) + "</span>")
        );

        // var o_NOI calculate NOI
        var o_NOI =
            o_Rent -
            o_Vacancy -
            (o_Tax +
                v_Insurance +
                o_Repair_Maintence +
                o_Property_Management +
                o_Leasing_Fees);
        $("#o_noi").empty();
        $("#o_noi").append(
            $(
                "<span real-value='" +
                o_NOI +
                "'>" +
                numberWithCommas((Math.round(o_NOI, DECIMAL_PLACE))) +
                "</span>"
            )
        );

        //var o_Return_Percent calculate the Cap Rate (Percentage Result)
        var o_Return_Percent = (o_NOI / v_Purchase_Price) * 100;
        //console.log(o_Return_Percent);
        $("#o_return_percent").empty();
        $("#o_return_percent").append(
            $(
                "<span class='percent' real-value='" + o_Return_Percent + "'>" +
                numberWithCommas(o_Return_Percent.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );
        
        // Calculation for Button 1 Ends
        // Button 1 Ends

        //BUTTON 2 Begins
        //Buttton 2 (Finance) Validation Begins
        // var Financing is used to check that The input is Negative, NULL or Greater than 100%, then show an error
        var flag = 0;
        var Financing = parseFloat($("#Financing").val());
        div = $('#Financing').closest('.error-holder');
        //console.log("Financing Validation", Financing);
        if (($("#Financing").val()).length == 0 || Financing <= 0 || Financing > 100) { //alert("Financing Percent can't be zero or Empty"); 
            flag++;
            $(div).find('.error').remove();
            $(div).append('<span class="error">Financing Percentage should be between 1-100 range.</span>');
            return;
        } else {
            $(div).find('.error').remove();

        }

        
        // var Amortization is used to check that The input is Negative or NULL, then show an error 
        var Amortization = parseFloat($("#Amortization ").val());
        div = $('#Amortization').closest('.error-holder');
        //console.log("Amortization  Validation", Amortization);
        if (Amortization <= 0 || ($("#Amortization").val()).length == 0) { //alert("Amortization Percent can't be zero or Empty"); 
            flag++;
            $(div).find('.error').remove();
            $(div).append('<span class="error">Amortization can not be Empty or can have a Negative value</span>');
            return;
        } else {
            $(div).find('.error').remove();

        }

        
        // var Interest_Rate is used to check that The input is Negative, NULL or greater than 100%, then show an error
        var Interest_Rate = parseFloat($("#Interest_Rate ").val());
        div = $('#Interest_Rate').closest('.error-holder');
        //console.log("Interest_Rate  Validation", Interest_Rate);
        if (($("#Interest_Rate").val()).length == 0 || Interest_Rate <= 0 || Interest_Rate > 100) { //alert("Interest Rate can't be zero or Empty"); 
            flag++;
            $(div).find('.error').remove();
            $(div).append('<span class="error">Interest Rate Percentage should be between 1-100 range.</span>');
            return;
        } else {
            $(div).find('.error').remove();

        }

        //End of Validation for Button 2

        //Calculation for Button 2 (Financial Calculation) Begins
        // var o_Investment_Amount is used to calculate the Interest Payment calculations
        var v_Financing =
            parseFloat(
                $("#Financing")
                .val()
                .replace("%", "")
            ) / 100;

        var v_Purchase_Price = parseFloat($("#Purchase_Price").val());

        var v_Loan_Amount = v_Purchase_Price * v_Financing;
        var o_Investment_Amount = v_Purchase_Price - v_Loan_Amount;

        $("#o_investment_amount").empty();
        $("#o_investment_amount").append(
            $(
                "<span real-value='" +
                o_Investment_Amount +
                "'>" +
                numberWithCommas(o_Investment_Amount.toFixed(DECIMAL_PLACE)) +
                "</span>"
            )
        );
        //var v_NOI is used to calculate the NOI
        var v_NOI = parseFloat(
            $("#o_noi")
            .find("span")
            .attr("real-value")
        );
        $("#o_f_noi").empty();
        $("#o_f_noi").append(
            $(
                "<span real-value='" +
                v_NOI +
                "'>" +
                numberWithCommas(v_NOI.toFixed(DECIMAL_PLACE)) +
                "</span>"
            )
        );

        //var emi is used to calculate EMI (per month) using the PMT Function mentioned in the formula.js File
        var P = v_Loan_Amount;
        var r = parseFloat($("#Interest_Rate").val()) / 100;
        var n = parseFloat($("#Amortization").val()) * 12;

        var emi = PMT(r / 12, n, P * -1, 0, 1);

        //console.log("EMI: ", emi);

        //var o_Mortgage_Payment calculates the Mortgage payment
        var o_Mortgage_Payment = emi * 12;

        $("#o_mortgage_payment").empty();
        $("#o_mortgage_payment").append(
            $("<span>" + numberWithCommas(o_Mortgage_Payment.toFixed(DECIMAL_PLACE)) + "</span>")
        );

        //var o_Net_Cash_Flow calculates the Net Cash Flow
        var o_Net_Cash_Flow = v_NOI - o_Mortgage_Payment;
        $("#o_net_cash_flow").empty();
        $("#o_net_cash_flow").append(
            $(
                "<span real-value='" +
                o_Net_Cash_Flow +
                "'>" +
                numberWithCommas(o_Net_Cash_Flow.toFixed(DECIMAL_PLACE)) +
                "</span>"
            )
        );

        //var o_Cash_On_Cash_Return Calculates the Cash On Cash Return (Percentage)
        var o_Cash_On_Cash_Return =
            (o_Net_Cash_Flow / o_Investment_Amount) * 100;
        $("#o_cash_on_cash_return").empty();
        $("#o_cash_on_cash_return").append(
            $(
                "<span class='percent'>" +
                numberWithCommas(o_Cash_On_Cash_Return.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );

        //var o_Interest_Payment Calculates the Interest Payment using the CUMIPMT Function(mentioned in the formula.js file
        var o_Interest_Payment = CUMIPMT(r / 12, n, P, 1, 12, 1) * -1;
        //console.log("CUMIPMT: ", o_Interest_Payment);
        $("#o_interest_payment").empty();
        $("#o_interest_payment").append(
            $(
                "<span real-value='" +
                o_Interest_Payment +
                "'>" +
                numberWithCommas(o_Interest_Payment.toFixed(DECIMAL_PLACE)) +
                "</span>"
            )
        );

        //var o_Principal_Pay_Down Calculates the Principal Pay Down
        var o_Principal_Pay_Down = CUMPRINC(r / 12, n, P, 1, 12, 1) * -1;
        //console.log("CUMPRINC: ", o_Principal_Pay_Down);
        $("#o_principal_pay_down").empty();
        $("#o_principal_pay_down").append(
            $("<span>" + numberWithCommas(o_Principal_Pay_Down.toFixed(DECIMAL_PLACE)) + "</span>")
        );


        //var o_ROI calculate ROI
        var o_ROI = o_Net_Cash_Flow + o_Principal_Pay_Down;
        $("#o_roi").empty();
        $("#o_roi").append(
            $("<span>" + numberWithCommas(o_ROI.toFixed(DECIMAL_PLACE)) + "</span>")
        );


        //var o_Principal_Pay_Down_Percent Calculate Principal Pay Down Percent
        var o_Principal_Pay_Down_Percent =
            (o_Principal_Pay_Down / o_Investment_Amount) * 100;
        $("#o_principal_pay_down_percent").empty();
        $("#o_principal_pay_down_percent").append(
            $(
                "<span class='percent' real-value='" +
                o_Principal_Pay_Down_Percent +
                "'>" +
                numberWithCommas(o_Principal_Pay_Down_Percent.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );
        //var o_ROI_Percent Calculates the ROI Percentage (Percentage) 
        var o_ROI_Percent =
            o_Cash_On_Cash_Return + o_Principal_Pay_Down_Percent;
        $("#o_roi_percent").empty();
        $("#o_roi_percent").append(
            $(
                "<span class='percent' real-value='" + o_ROI_Percent + "'>" +
                numberWithCommas(o_ROI_Percent.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );
        //Calculation for Button 2 Ends
        //BUTTON 2 ENDS

        //BUTTON 3 (Tax Calculation) Begins
        //Button 3 Validation Begins
        var flag = 0;
        
        // var Effective_Tax_Rate is used to check that The input is Negative, NULL or greater than 100%, then show an error
        var Effective_Tax_Rate = parseFloat($("#Effective_Tax_Rate").val());
        div = $('#Effective_Tax_Rate').closest('.error-holder');
        ////console.log("Effective_Tax_Rate Validation",Financing);
        if (($("#Effective_Tax_Rate").val()).length == 0 || Effective_Tax_Rate <= 0 || Effective_Tax_Rate > 100) { //alert("Effective Tax Rate can't be zero"); 
            flag++;
            $(div).find('.error').remove();
            $(div).append('<span class="error">Effective Tax rate should be between 1-100 range.</span>');
            return;
        } else {
            $(div).find('.error').remove();

        }

        
        // var Land_Value_Percent is used to check that The input is Negative, NULL or greater than 100%, then show an error
        var Land_Value_Percent = parseFloat($("#Land_Value_Percent").val());
        div = $('#Effective_Tax_Rate').closest('.error-holder');
        //console.log("Land_Value_Percent Validation", Land_Value_Percent);
        if (($("#Land_Value_Percent").val()).length == 0 || Land_Value_Percent <= 0 || Land_Value_Percent > 100) { //alert("Land Value Percent can't be zero"); 
            flag++;
            $(div).find('.error').remove();
            $(div).append('<span class="error">Land value Percentage should be between 1-100 range.</span>');
            return;
        } else {
            $(div).find('.error').remove();


        }

        //End of Validation for Button 3

        //Tax Calculations
        //Calculation for button 3 Begins
        //var o_Depreciate_Building_Value Calculates the Depriciation
        var v_Purchase_Price = parseFloat($("#Purchase_Price").val());
        var v_Effective_Tax_Rate =
            parseFloat($("#Effective_Tax_Rate").val()) / 100;
        var v_land_value_percent =
            parseFloat($("#Land_Value_Percent").val()) / 100;

        var o_Depreciate_Building_Value =
            v_Purchase_Price * (1 - v_land_value_percent);

        $("#o_depreciate_building_value").empty();
        $("#o_depreciate_building_value").append(
            $(
                "<span>" +
                numberWithCommas((o_Depreciate_Building_Value.toFixed(DECIMAL_PLACE)) +
                    "</span>"
                )
            ));


        //var o_T_Noi is used to Find and Calculate the NOI
        var o_T_Noi = parseFloat(
            $("#o_f_noi")
            .find("span")
            .attr("real-value")
        );
        $("#o_t_noi").empty();
        $("#o_t_noi").append(
            $("<span>" + numberWithCommas(o_T_Noi.toFixed(DECIMAL_PLACE)) + "</span>")
        );

        //var o_Interest_Payment Calculates the Interest payment
        var o_Interest_Payment = parseFloat(
            $("#o_interest_payment")
            .find("span")
            .attr("real-value")
        );
        $("#o_interest").empty();
        $("#o_interest").append(
            $("<span>" + numberWithCommas(o_Interest_Payment.toFixed(DECIMAL_PLACE)) + "</span>")
        );


        //var o_Depreciation Calculates the Depriciation
        var o_Depreciation = o_Depreciate_Building_Value / 27.5;
        $("#o_depreciation").empty();
        $("#o_depreciation").append(
            $("<span>" + numberWithCommas(o_Depreciation.toFixed(DECIMAL_PLACE)) + "</span>")
        );

        //var o_Taxable_Income Calculates the Taxable Income
        var o_Taxable_Income = o_T_Noi - o_Interest_Payment - o_Depreciation;
        $("#o_taxable_income").empty();
        $("#o_taxable_income").append(
            $("<span>" + numberWithCommas(o_Taxable_Income.toFixed(DECIMAL_PLACE)) + "</span>")
        );

        //var o_Taxes Calculates the Income Taxes
        var o_Taxes = o_Taxable_Income * v_Effective_Tax_Rate;
        $("#o_taxes").empty();
        $("#o_taxes").append(
            $("<span>" + numberWithCommas(o_Taxes.toFixed(DECIMAL_PLACE)) + "</span>")
        );

        //var v_Net_Cash_Flow Calculates the net Cash Flow
        var v_Net_Cash_Flow = parseFloat(
            $("#o_net_cash_flow")
            .find("span")
            .attr("real-value")
        );

        //var o_Net_Cash_Flow_After_Taxes calculates the Net Cash Flow After Taxes
        var o_Net_Cash_Flow_After_Taxes = v_Net_Cash_Flow - o_Taxes;
        $("#o_net_cash_flow_after_taxes").empty();
        $("#o_net_cash_flow_after_taxes").append(
            $(
                "<span>" +
                numberWithCommas(o_Net_Cash_Flow_After_Taxes.toFixed(DECIMAL_PLACE)) +
                "</span>"
            )
        );

        //var o_Net_Cash_Flow_After_Taxes_Percent Calculates the Net Cash Flow After Tax Percent
        var v_Investment_Amount = parseFloat(
            $("#o_investment_amount")
            .find("span")
            .attr("real-value")
        );
        var o_Net_Cash_Flow_After_Taxes_Percent =
            (o_Net_Cash_Flow_After_Taxes / v_Investment_Amount) * 100;
        $("#o_net_cash_flow_after_taxes_percent").empty();
        $("#o_net_cash_flow_after_taxes_percent").append(
            $(
                "<span class='percent'>" +
                numberWithCommas(o_Net_Cash_Flow_After_Taxes_Percent.toFixed(
                    PERCENT_DECIMAL_PLACE
                )) +
                "</span>"
            )
        );

        //var v_t_Principal_Pay_Down_Percent Calculates the  Principal Pay Down (Percentage)
        var v_t_Principal_Pay_Down_Percent = parseFloat(
            $("#o_principal_pay_down_percent")
            .find("span")
            .attr("real-value")
        );
        $("#o_t_principal_pay_down_percent").empty();
        $("#o_t_principal_pay_down_percent").append(
            $(
                "<span class='percent'>" +
                numberWithCommas(v_t_Principal_Pay_Down_Percent.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );

        //var o_Effective_After_Tax_Return_On_Investment Calculates the Effective tax Return On Investment (Percentage)
        var o_Effective_After_Tax_Return_On_Investment =
            o_Net_Cash_Flow_After_Taxes_Percent + v_t_Principal_Pay_Down_Percent;
        $("#o_effective_after_tax_return_on_investment").empty();
        $("#o_effective_after_tax_return_on_investment").append(
            $(
                "<span class='percent'>" +
                numberWithCommas(o_Effective_After_Tax_Return_On_Investment.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );

        //var o_Pre_Tax_Financed_Return Calculate Pre tax Financed Return (Percetage)
        var o_Pre_Tax_Financed_Return = parseFloat(
            $("#o_roi_percent")
            .find("span")
            .attr("real-value")
        );
        //console.log("Pre-Tax Financed return", o_Pre_Tax_Financed_Return);
        $("#o_pre_tax_financed_return").empty();
        $("#o_pre_tax_financed_return").append(
            $(
                "<span class='percent'>" +
                numberWithCommas(o_Pre_Tax_Financed_Return.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );

        //var o_Effective_Tax_Rate Calculates the Effective Tax Rate (Percentage)
        var o_Effective_Tax_Rate = (1 - o_Effective_After_Tax_Return_On_Investment / o_Pre_Tax_Financed_Return) * 100;
        $("#o_effective_tax_rate_investment").empty();
        $("#o_effective_tax_rate_investment").append(
            $(
                "<span class='percent'>" +
                numberWithCommas(o_Effective_Tax_Rate.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );

        //var o_Cap_Rate Calculates the Cap Rate (Percentage)
        var o_Cap_Rate = parseFloat(
            $("#o_return_percent")
            .find("span")
            .attr("real-value")
        );
        $("#o_cap_rate").empty();
        $("#o_cap_rate").append(
            $(
                "<span class='percent'>" +
                numberWithCommas(o_Cap_Rate.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );

        //var o_Pre_Tax_Return Calculates the Pre-Tax Return (Percentage)
        var o_Pre_Tax_Return = parseFloat(
            $("#o_roi_percent")
            .find("span")
            .attr("real-value")
        );
        $("#o_pre_tax_return").empty();
        $("#o_pre_tax_return").append(
            $(
                "<span class='percent'>" +
                numberWithCommas(o_Pre_Tax_Return.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );

        //var o_after_tax_return_value Calculates the After Tax return Value
        var o_after_tax_return_value = o_ROI - o_Taxes;
        $("#o_after_tax_return_value").empty();
        $("#o_after_tax_return_value").append(
            $(
                "<span>" +
                numberWithCommas(o_after_tax_return_value.toFixed(0)) +
                "</span>"
            )
        );

        //var o_Effective_After_Tax_Return_On_Investment Calculates the After Tax Return (Percentage)
        $("#o_after_tax_return").empty();
        $("#o_after_tax_return").append(
            $(
                "<span class='percent'>" +
                numberWithCommas(o_Effective_After_Tax_Return_On_Investment.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );


        //var o_Comparable_Pre_Tax_Returns_From_Other_Assets Calculates the effective Tax return on Investment(Percentage)
        var o_Comparable_Pre_Tax_Returns_From_Other_Assets = o_Effective_After_Tax_Return_On_Investment / (1 - v_Effective_Tax_Rate);
        $("#o_comparable_pre_tax_returns_from_other_assets").empty();
        $("#o_comparable_pre_tax_returns_from_other_assets").append(
            $(
                "<span class='percent'>" +
                numberWithCommas(o_Comparable_Pre_Tax_Returns_From_Other_Assets.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );

        //var v_Return_Percent Calculates the Return Percent
        var v_Return_Percent = parseFloat(
            $("#o_return_percent")
            .find("span")
            .attr("real-value")
        )

        //var o_The_Cap_Rate_Of_The_Rental_Property Calculates the Cap rate of the Rental property (Percentage)
        var o_The_Cap_Rate_Of_The_Rental_Property = o_Comparable_Pre_Tax_Returns_From_Other_Assets / v_Return_Percent;
        $("#o_the_cap_rate_of_the_rental_property").empty();
        $("#o_the_cap_rate_of_the_rental_property").append(
            $(
                "<span class='percent'>" +
                numberWithCommas(o_The_Cap_Rate_Of_The_Rental_Property.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );
        
        
        //var o_Comparable_Pre_Tax_Returns_From_Other_Assets Calculates Comparable Pre Tax Return from Other Assets (Percentage)
        $("#o_stocks_and_bonds_yielding").empty();
        $("#o_stocks_and_bonds_yielding").append(
            $(
                "<span class='percent'>" +
                numberWithCommas(o_Comparable_Pre_Tax_Returns_From_Other_Assets.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );

        
        //var v_Effective_Tax_Rate Calculates Effective Tax Rate (Percentage)
        $("#o_effective_tax_rate").empty();
        $("#o_effective_tax_rate").append(
            $(
                "<span class='percent'>" +
                numberWithCommas((v_Effective_Tax_Rate * 100).toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );
        //var o_After_Tax_Return_Last Calculates After tax return (Percentage)
        var o_After_Tax_Return_Last = o_Comparable_Pre_Tax_Returns_From_Other_Assets * (1 - v_Effective_Tax_Rate);
        $("#o_after_tax_return_last").empty();
        $("#o_after_tax_return_last").append(
            $(
                "<span class='percent'>" +
                numberWithCommas(o_After_Tax_Return_Last.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );
        //document.getElementById("Summary_calculation").hidden = false;


        //var v_Cash_On_Cash_Return Calculates the Cash on Cash return (Percentage)
        var v_Cash_On_Cash_Return =
            (o_Net_Cash_Flow / o_Investment_Amount) * 100;
        $("#v_cash_on_cash_return").empty();
        $("#v_cash_on_cash_return").append(
            $(
                "<span class='percent'>" +
                numberWithCommas(v_Cash_On_Cash_Return.toFixed(PERCENT_DECIMAL_PLACE)) +
                "</span>"
            )
        );
        //Calculation for button 3 Ends
        //BUTTON 3 Ends
    }; // End of the Called Function


    $('[data-toggle="tooltip"]').tooltip();
    // $('[data-toggle="tooltip"]').click(function(e) {
    //     $('[data-toggle="tooltip"]').not(this).tooltip('hide');
    // });

    $("input").keyup(function(e) {
        //console.log(e.target.value);
        calculate();
    });
    calculate();
    // e.preventDefault();

    //$("#btnCalculateFinanceReturn").disabled=true;
    //document.getElementById("btnCalculateFinanceReturn").disabled=false;
    //To be checked, locking button after changes made in data wihout reload
    //document.getElementById("btnCalculateTax").disabled=true;
    //     if (flag == 0)
    //         document.getElementById("financial_calculation").hidden = false;





    //document.getElementById("btnCalculateTax").disabled=false;
    //document.getElementById("tax_calculation").hidden = false;




    //$("#btnCalculateTax").click(function(e) {
    // e.preventDefault();
    //Get the button:
    //SCROLL begins
    mybutton = document.getElementById("myBtn");
    ////console.log("hello");

    $("#myBtn").click(function() {
        ////console.log("Top");
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    //SCROLL Ends
});

    
(function ($) {
    "use strict";
    if (!$.browser) {
        $.browser = {};
        $.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
        $.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
        $.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
        $.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
        $.browser.device = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
    }

    var defaultOptions = {
                prefix: "",
                suffix: "",
                affixesStay: true,
                thousands: ",",
                decimal: ".",
                precision: 2,
                allowZero: false,
                allowNegative: false,
                doubleClickSelection: true,
                allowEmpty: false,
                bringCaretAtEndOnFocus: true
            },
        methods = {
        destroy: function () {
            $(this).unbind(".maskMoney");

            if ($.browser.msie) {
                this.onpaste = null;
            }
            return this;
        },

        applyMask: function (value) {
            var $input = $(this);
            // data-* api
            var settings = $input.data("settings");
            return maskValue(value, settings);
        },

        mask: function (value) {
            return this.each(function () {
                var $this = $(this);
                if (typeof value === "number") {
                    $this.val(value);
                }
                return $this.trigger("mask");
            });
        },

        unmasked: function () {
            return this.map(function () {
                var value = ($(this).val() || "0"),
                    isNegative = value.indexOf("-") !== -1,
                    decimalPart;
                // get the last position of the array that is a number(coercion makes "" to be evaluated as false)
                $(value.split(/\D/).reverse()).each(function (index, element) {
                    if (element) {
                        decimalPart = element;
                        return false;
                    }
                });
                value = value.replace(/\D/g, "");
                value = value.replace(new RegExp(decimalPart + "$"), "." + decimalPart);
                if (isNegative) {
                    value = "-" + value;
                }
                return parseFloat(value);
            });
        },

        unmaskedWithOptions: function () {
            return this.map(function () {
                var value = ($(this).val() || "0"),
                    settings = $(this).data("settings") || defaultOptions,
                    regExp = new RegExp((settings.thousandsForUnmasked || settings.thousands), "g");
                value = value.replace(regExp, "");
                return parseFloat(value);
            });
        },

        init: function (parameters) {
            // the default options should not be shared with others
            parameters = $.extend($.extend({}, defaultOptions), parameters);

            return this.each(function () {
                var $input = $(this), settings,
                    onFocusValue;

                // data-* api
                settings = $.extend({}, parameters);
                settings = $.extend(settings, $input.data());

                // Store settings for use with the applyMask method.
                $input.data("settings", settings);


                function getInputSelection() {
                    var el = $input.get(0),
                        start = 0,
                        end = 0,
                        normalizedValue,
                        range,
                        textInputRange,
                        len,
                        endRange;

                    if (typeof el.selectionStart === "number" && typeof el.selectionEnd === "number") {
                        start = el.selectionStart;
                        end = el.selectionEnd;
                    } else {
                        range = document.selection.createRange();

                        if (range && range.parentElement() === el) {
                            len = el.value.length;
                            normalizedValue = el.value.replace(/\r\n/g, "\n");

                            // Create a working TextRange that lives only in the input
                            textInputRange = el.createTextRange();
                            textInputRange.moveToBookmark(range.getBookmark());

                            // Check if the start and end of the selection are at the very end
                            // of the input, since moveStart/moveEnd doesn't return what we want
                            // in those cases
                            endRange = el.createTextRange();
                            endRange.collapse(false);

                            if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
                                start = end = len;
                            } else {
                                start = -textInputRange.moveStart("character", -len);
                                start += normalizedValue.slice(0, start).split("\n").length - 1;

                                if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
                                    end = len;
                                } else {
                                    end = -textInputRange.moveEnd("character", -len);
                                    end += normalizedValue.slice(0, end).split("\n").length - 1;
                                }
                            }
                        }
                    }

                    return {
                        start: start,
                        end: end
                    };
                } // getInputSelection

                function canInputMoreNumbers() {
                    var haventReachedMaxLength = !($input.val().length >= $input.attr("maxlength") && $input.attr("maxlength") >= 0),
                        selection = getInputSelection(),
                        start = selection.start,
                        end = selection.end,
                        haveNumberSelected = (selection.start !== selection.end && $input.val().substring(start, end).match(/\d/)) ? true : false,
                        startWithZero = ($input.val().substring(0, 1) === "0");
                    return haventReachedMaxLength || haveNumberSelected || startWithZero;
                }

                function setCursorPosition(pos) {
                    // Do not set the position if
                    // the we're formatting on blur.
                    // This is because we do not want
                    // to refocus on the control after
                    // the blur.
                    if (!!settings.formatOnBlur) {
                        return;
                    }

                    $input.each(function (index, elem) {
                        if (elem.setSelectionRange) {
                            elem.focus();
                            elem.setSelectionRange(pos, pos);
                        } else if (elem.createTextRange) {
                            var range = elem.createTextRange();
                            range.collapse(true);
                            range.moveEnd("character", pos);
                            range.moveStart("character", pos);
                            range.select();
                        }
                    });
                }

                function maskAndPosition(startPos) {
                    var originalLen = $input.val().length,
                        newLen;
                    $input.val(maskValue($input.val(), settings));
                    newLen = $input.val().length;
                    // If the we're using the reverse option,
                    // do not put the cursor at the end of
                    // the input. The reverse option allows
                    // the user to input text from left to right.
                    if (!settings.reverse) {
                        startPos = startPos - (originalLen - newLen);
                    }
                    setCursorPosition(startPos);
                }

                function mask() {
                    var value = $input.val();
                    if (settings.allowEmpty && value === "") {
                        return;
                    }
                    var decimalPointIndex = value.indexOf(settings.decimal);
                    if (settings.precision > 0) {
                        if(decimalPointIndex < 0){
                            value += settings.decimal + new Array(settings.precision + 1).join(0);
                        }
                        else {
                            // If the following decimal part dosen't have enough length against the precision, it needs to be filled with zeros.
                            var integerPart = value.slice(0, decimalPointIndex),
                                decimalPart = value.slice(decimalPointIndex + 1);
                            value = integerPart + settings.decimal + decimalPart +
                                    new Array((settings.precision + 1) - decimalPart.length).join(0);
                        }
                    } else if (decimalPointIndex > 0) {
                        // if the precision is 0, discard the decimal part
                        value = value.slice(0, decimalPointIndex);
                    }
                    $input.val(maskValue(value, settings));
                }

                function changeSign() {
                    var inputValue = $input.val();
                    if (settings.allowNegative) {
                        if (inputValue !== "" && inputValue.charAt(0) === "-") {
                            return inputValue.replace("-", "");
                        } else {
                            return "-" + inputValue;
                        }
                    } else {
                        return inputValue;
                    }
                }

                function preventDefault(e) {
                    if (e.preventDefault) { //standard browsers
                        e.preventDefault();
                    } else { // old internet explorer
                        e.returnValue = false;
                    }
                }

                function fixMobile() {
                    if ($.browser.device) {
                        $input.attr("type", "tel");
                    }
                }

                function keypressEvent(e) {
                    e = e || window.event;
                    var key = e.which || e.charCode || e.keyCode,
                        decimalKeyCode = settings.decimal.charCodeAt(0);
                    //added to handle an IE "special" event
                    if (key === undefined) {
                        return false;
                    }

                    // any key except the numbers 0-9. if we're using settings.reverse,
                    // allow the user to input the decimal key
                    if ((key < 48 || key > 57) && (key !== decimalKeyCode || !settings.reverse)) {
                        return handleAllKeysExceptNumericalDigits(key, e);
                    } else if (!canInputMoreNumbers()) {
                        return false;
                    } else {
                        if (key === decimalKeyCode && shouldPreventDecimalKey()) {
                            return false;
                        }
                        if (settings.formatOnBlur) {
                            return true;
                        }
                        preventDefault(e);
                        applyMask(e);
                        return false;
                    }
                }

                function shouldPreventDecimalKey() {
                    // If all text is selected, we can accept the decimal
                    // key because it will replace everything.
                    if (isAllTextSelected()) {
                        return false;
                    }

                    return alreadyContainsDecimal();
                }

                function isAllTextSelected() {
                    var length = $input.val().length;
                    var selection = getInputSelection();
                    // This should if all text is selected or if the
                    // input is empty.
                    return selection.start === 0 && selection.end === length;
                }

                function alreadyContainsDecimal() {
                    return $input.val().indexOf(settings.decimal) > -1;
                }

                function applyMask(e) {
                    e = e || window.event;
                    var key = e.which || e.charCode || e.keyCode,
                        keyPressedChar = "",
                        selection,
                        startPos,
                        endPos,
                        value;
                    if (key >= 48 && key <= 57) {
                        keyPressedChar = String.fromCharCode(key);
                    }
                    selection = getInputSelection();
                    startPos = selection.start;
                    endPos = selection.end;
                    value = $input.val();
                    $input.val(value.substring(0, startPos) + keyPressedChar + value.substring(endPos, value.length));
                    maskAndPosition(startPos + 1);
                }

                function handleAllKeysExceptNumericalDigits(key, e) {
                    // -(minus) key
                    if (key === 45) {
                        $input.val(changeSign());
                        return false;
                        // +(plus) key
                    } else if (key === 43) {
                        $input.val($input.val().replace("-", ""));
                        return false;
                        // enter key or tab key
                    } else if (key === 13 || key === 9) {
                        return true;
                    } else if ($.browser.mozilla && (key === 37 || key === 39) && e.charCode === 0) {
                        // needed for left arrow key or right arrow key with firefox
                        // the charCode part is to avoid allowing "%"(e.charCode 0, e.keyCode 37)
                        return true;
                    } else { // any other key with keycode less than 48 and greater than 57
                        preventDefault(e);
                        return true;
                    }
                }

                function keydownEvent(e) {
                    e = e || window.event;
                    var key = e.which || e.charCode || e.keyCode,
                        selection,
                        startPos,
                        endPos,
                        value,
                        lastNumber;
                    //needed to handle an IE "special" event
                    if (key === undefined) {
                        return false;
                    }

                    selection = getInputSelection();
                    startPos = selection.start;
                    endPos = selection.end;

                    if (key === 8 || key === 46 || key === 63272) { // backspace or delete key (with special case for safari)
                        preventDefault(e);

                        value = $input.val();

                        // not a selection
                        if (startPos === endPos) {
                            // backspace
                            if (key === 8) {
                                if (settings.suffix === "") {
                                    startPos -= 1;
                                } else {
                                    // needed to find the position of the last number to be erased
                                    lastNumber = value.split("").reverse().join("").search(/\d/);
                                    startPos = value.length - lastNumber - 1;
                                    endPos = startPos + 1;
                                }
                                //delete
                            } else {
                                endPos += 1;
                            }
                        }

                        $input.val(value.substring(0, startPos) + value.substring(endPos, value.length));

                        maskAndPosition(startPos);
                        return false;
                    } else if (key === 9) { // tab key
                        return true;
                    } else { // any other key
                        return true;
                    }
                }

                function focusEvent() {
                    onFocusValue = $input.val();
                    mask();
                    var input = $input.get(0),
                        textRange;

                    if (!!settings.selectAllOnFocus) {
                        input.select();
                    } else if (input.createTextRange && settings.bringCaretAtEndOnFocus) {
                        textRange = input.createTextRange();
                        textRange.collapse(false); // set the cursor at the end of the input
                        textRange.select();
                    }
                }

                function cutPasteEvent() {
                    setTimeout(function () {
                        mask();
                    }, 0);
                }

                function getDefaultMask() {
                    var n = parseFloat("0") / Math.pow(10, settings.precision);
                    return (n.toFixed(settings.precision)).replace(new RegExp("\\.", "g"), settings.decimal);
                }

                function blurEvent(e) {
                    if ($.browser.msie) {
                        keypressEvent(e);
                    }

                    if (!!settings.formatOnBlur && $input.val() !== onFocusValue) {
                        applyMask(e);
                    }

                    if ($input.val() === "" && settings.allowEmpty) {
                        $input.val("");
                    } else if ($input.val() === "" || $input.val() === setSymbol(getDefaultMask(), settings)) {
                        if (!settings.allowZero) {
                            $input.val("");
                        } else if (!settings.affixesStay) {
                            $input.val(getDefaultMask());
                        } else {
                            $input.val(setSymbol(getDefaultMask(), settings));
                        }
                    } else {
                        if (!settings.affixesStay) {
                            var newValue = $input.val().replace(settings.prefix, "").replace(settings.suffix, "");
                            $input.val(newValue);
                        }
                    }
                    if ($input.val() !== onFocusValue) {
                        $input.change();
                    }
                }

                function clickEvent() {
                    var input = $input.get(0),
                        length;
                    if (!!settings.selectAllOnFocus) {
                        // selectAllOnFocus will be handled by
                        // the focus event. The focus event is
                        // also fired when the input is clicked.
                        return;
                    } else if (input.setSelectionRange && settings.bringCaretAtEndOnFocus) {
                        length = $input.val().length;
                        input.setSelectionRange(length, length);
                    } else {
                        $input.val($input.val());
                    }
                }

                function doubleClickEvent() {
                    var input = $input.get(0),
                        start,
                        length;
                    if (input.setSelectionRange && settings.bringCaretAtEndOnFocus) {
                        length = $input.val().length;
                        start = settings.doubleClickSelection ? 0 : length;
                        input.setSelectionRange(start, length);
                    } else {
                        $input.val($input.val());
                    }
                }

                fixMobile();
                $input.unbind(".maskMoney");
                $input.bind("keypress.maskMoney", keypressEvent);
                $input.bind("keydown.maskMoney", keydownEvent);
                $input.bind("blur.maskMoney", blurEvent);
                $input.bind("focus.maskMoney", focusEvent);
                $input.bind("click.maskMoney", clickEvent);
                $input.bind("dblclick.maskMoney", doubleClickEvent);
                $input.bind("cut.maskMoney", cutPasteEvent);
                $input.bind("paste.maskMoney", cutPasteEvent);
                $input.bind("mask.maskMoney", mask);
            });
        }
    };

    function setSymbol(value, settings) {
        var operator = "";
        if (value.indexOf("-") > -1) {
            value = value.replace("-", "");
            operator = "-";
        }
        if (value.indexOf(settings.prefix) > -1) {
            value = value.replace(settings.prefix, "");
        }
        if (value.indexOf(settings.suffix) > -1) {
            value = value.replace(settings.suffix, "");
        }
        return operator + settings.prefix + value + settings.suffix;
    }

    function maskValue(value, settings) {
        if (settings.allowEmpty && value === "") {
            return "";
        }
        if (!!settings.reverse) {
            return maskValueReverse(value, settings);
        }
        return maskValueStandard(value, settings);
    }

    function maskValueStandard(value, settings) {
        var negative = (value.indexOf("-") > -1 && settings.allowNegative) ? "-" : "",
            onlyNumbers = value.replace(/[^0-9]/g, ""),
            integerPart = onlyNumbers.slice(0, onlyNumbers.length - settings.precision),
            newValue,
            decimalPart,
            leadingZeros;

        newValue = buildIntegerPart(integerPart, negative, settings);

        if (settings.precision > 0) {
            decimalPart = onlyNumbers.slice(onlyNumbers.length - settings.precision);
            leadingZeros = new Array((settings.precision + 1) - decimalPart.length).join(0);
            newValue += settings.decimal + leadingZeros + decimalPart;
        }
        return setSymbol(newValue, settings);
    }

    function maskValueReverse(value, settings) {
        var negative = (value.indexOf("-") > -1 && settings.allowNegative) ? "-" : "",
            valueWithoutSymbol = value.replace(settings.prefix, "").replace(settings.suffix, ""),
            integerPart = valueWithoutSymbol.split(settings.decimal)[0],
            newValue,
            decimalPart = "";

        if (integerPart === "") {
            integerPart = "0";
        }
        newValue = buildIntegerPart(integerPart, negative, settings);

        if (settings.precision > 0) {
            var arr = valueWithoutSymbol.split(settings.decimal);
            if (arr.length > 1) {
                decimalPart = arr[1];
            }
            newValue += settings.decimal + decimalPart;
            var rounded = Number.parseFloat((integerPart + "." + decimalPart)).toFixed(settings.precision);
            var roundedDecimalPart = rounded.toString().split(settings.decimal)[1];
            newValue = newValue.split(settings.decimal)[0] + "." + roundedDecimalPart;
        }

        return setSymbol(newValue, settings);
    }

    function buildIntegerPart(integerPart, negative, settings) {
        // remove initial zeros
        integerPart = integerPart.replace(/^0*/g, "");

        // put settings.thousands every 3 chars
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, settings.thousands);
        if (integerPart === "") {
            integerPart = "0";
        }
        return negative + integerPart;
    }

    $.fn.maskMoney = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist on jQuery.maskMoney");
        }
    };
})(window.jQuery || window.Zepto);
