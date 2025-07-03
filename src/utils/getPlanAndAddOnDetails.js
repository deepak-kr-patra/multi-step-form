const arcadeMonthly = {
    plan: "Arcade (Monthly)",
    cost: "$9/mo"
}
const advancedMonthly = {
    plan: "Advanced (Monthly)",
    cost: "$12/mo"
}
const proMonthly = {
    plan: "Pro (Monthly)",
    cost: "$15/mo"
}
const arcadeYearly = {
    plan: "Arcade (Yearly)",
    cost: "$90/yr"
}
const advancedYearly = {
    plan: "Advanced (Yearly)",
    cost: "$120/yr"
}
const proYearly = {
    plan: "Pro (Yearly)",
    cost: "$150/yr"
}

export const getPlanDetails = (selectedPlanID) => {
    let selectedPlan = {};
    switch (selectedPlanID) {
        case "monthlyArcade":
            selectedPlan = arcadeMonthly;
            break;
        case "monthlyAdvanced":
            selectedPlan = advancedMonthly;
            break;
        case "monthlyPro":
            selectedPlan = proMonthly;
            break;
        case "yearlyArcade":
            selectedPlan = arcadeYearly;
            break;
        case "yearlyAdvanced":
            selectedPlan = advancedYearly;
            break;
        case "yearlyPro":
            selectedPlan = proYearly;
            break;
        default:
            console.log("Invalid plan ID");
    }

    return selectedPlan;
}

export const getAddOnDetails = (addOnID, subscriptionMode) => {
    let addOnName, addOnCost;
    switch (addOnID) {
        case "onlineService":
            addOnName = "Online Service";
            addOnCost = subscriptionMode === "monthly" ? "+$1/mo" : "+$10/yr";
            break;
        case "largerStorage":
            addOnName = "Larger storage";
            addOnCost = subscriptionMode === "monthly" ? "+$2/mo" : "+$20/yr";
            break;
        case "customizableProfile":
            addOnName = "Customizable profile";
            addOnCost = subscriptionMode === "monthly" ? "+$2/mo" : "+$20/yr";
            break;
        default:
            console.log("Invalid Add-On ID");
    }

    return { addOnName, addOnCost };
}

export const getTotalCost = (selectedPlanID, subscriptionMode, selectedAddOns) => {
    let planCost, addOnCost = 0;
    switch (selectedPlanID) {
        case "monthlyArcade":
            planCost = 9;
            break;
        case "monthlyAdvanced":
            planCost = 12;
            break;
        case "monthlyPro":
            planCost = 15;
            break;
        case "yearlyArcade":
            planCost = 90;
            break;
        case "yearlyAdvanced":
            planCost = 120;
            break;
        case "yearlyPro":
            planCost = 150;
            break;
        default:
            console.log("Invalid plan ID");
    }

    selectedAddOns.forEach(selectedAddOn => {
        switch (selectedAddOn) {
            case "onlineService":
                addOnCost += subscriptionMode === "monthly" ? 1 : 10;
                break;
            case "largerStorage":
                addOnCost += subscriptionMode === "monthly" ? 2 : 20;
                break;
            case "customizableProfile":
                addOnCost += subscriptionMode === "monthly" ? 2 : 20;
                break;
            default:
                console.log("Invalid Add-On ID");
        }
    });

    return planCost + addOnCost;
}