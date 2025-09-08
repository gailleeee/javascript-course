// Remember, we're gonna use strict mode in all scripts now!
'use strict';

////////////////////////////////////
// Professional Development Environment Setup

console.log("=== DEVELOPMENT ENVIRONMENT SETUP ===");

// Create some messy code - don't worry about formatting yet
const messyExample = function (name, age) {
    if (age >= 18) {
    return "Hello " + name + ", you are an adult";
    } else {
    return "Hello " + name + ", you are a minor";
    }
};

console.log("Current messy code example:", messyExample("John", 25));
console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");

function testExtensions() {
    const extensionTests = [
    { name: "Prettier", status: "installed", purpose: "code formatting" },
    { name: "Live Server", status: "installed", purpose: "auto refresh" },
    {
        name: "Auto Rename Tag",
        status: "installed",
        purpose: "HTML efficiency",
    },
    ];

    return extensionTests;
}

const extensionStatus = testExtensions();
console.log("Extension installation status:", extensionStatus);