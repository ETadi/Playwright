const readline = require('readline-sync');

//1. collect customer data
const custName = readline.question(" Enter Customer Name:  ").trim();
let custType = readline.question("Enter customer type (Regular or Premium):  ").trim().toLowerCase();
const purchaseAmt = Number(readline.question("Enter total purchase amount (₹):  "));

 //input validation
 if (custName === "" || (custType !== "regular" && custType !== "premium") || isNaN(purchaseAmt) || purchaseAmt <= 0) {
    console.log("Invalid input. Please try again.");
    process.exit();
}
 
//2.Display Menu
const choice = readline.question ("Choose an action:\n" +  
            "1. Calculate Discount\n" +
            "2. Add GST\n" +
            "3. Final Bill Amount\n" +
            "4. Payment Method Message\n "
        );



 //calculate discount
 function calcDiscount(type, amount){
    let discountPerc;

    if (type === "premium"){
        if (amount >= 5000){
            discountPerc = 20;
        } else {
            discountPerc = 10;
        }
    } else {
        if (amount >= 5000){
            discountPerc = 10;
        } else {
            discountPerc = 5;
        }
    }

    return { percent: discountPerc, amount: (amount *( (100-discountPerc)/100))}; //discount percentage and the discountedamount after discount
 }

switch(choice) {
    case "1": {
        console.log("calculate discount");
        const discount = calcDiscount(custType,purchaseAmt);
        console.log(`Customer: ${custName} (${custType})`);
        console.log(`Discount: ${discount.percent}%`);
        console.log(`Price after discount: ₹${discount.amount.toFixed(2)}`);
        break; 
    }

     case "2": {
        console.log("add gst");
        const gst = purchaseAmt * 0.18; 
        const total = purchaseAmt + gst; 
        console.log(`GST amount: ₹${gst.toFixed(2)}`);
        console.log(`Amount with GST: ₹${total.toFixed(2)}`)
        break; 
    }

     case "3": {
        console.log("** Final bill **");
        const discount = calcDiscount(custType,purchaseAmt);
        console.log(`Customer: ${custName} (${custType})`);
        console.log(`Discount: ${discount.percent}%`);
        console.log(`Discounted Amount: ₹${discount.amount.toFixed(2)}`);
        const gst = discount.amount * 0.18; 
        const total = discount.amount + gst; 
        console.log(`GST amount: ₹${gst.toFixed(2)}`);
        //console.log(`Amount with GST: ${total}`)
        console.log(`Final bill is ₹${total.toFixed(2)}`);
        break;
    }

     case "4": {
        console.log("payment method message");
        const method = readline.question("Choose payment method:\n1. Cash\n2. UPI\n3. Card\n");
        switch (method) {
            case "1":
                console.log("You can pay cash at the counter.");
                break;
            case "2":
                console.log("Please scan the QR code to pay with UPI.");
                break;
            case "3":
                console.log("Insert or tap your card to make the payment.");
                break;
            default :
                console.log("Invalid payment option");
                break;
        }
        break;
    }

    default: 
    console.log("Invalid input. Please select 1,2,3 or 4");
    break;
}        