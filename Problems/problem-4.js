function password(infoormation) {
    // Check if infoormation is not null and is an object
    if (!infoormation || typeof infoormation !== 'object') {
        return "invalid";
    }

    // Check if name is missing or not a string
    if (!infoormation.name || typeof infoormation.name !== 'string') {
        return "invalid";
    }

    // Check if birthYear is missing, not a number, or not a 4-digit number
    if (!infoormation.birthYear || typeof infoormation.birthYear !== 'number' || infoormation.birthYear.toString().length !== 4) {
        return "invalid";
    }

    // Check if siteName is missing or not a string
    if (!infoormation.siteName || typeof infoormation.siteName !== 'string') {
        return "invalid";
    }

    // Capitalize the first letter of the siteName
    const websiteName = infoormation.siteName.charAt(0).toUpperCase() + infoormation.siteName.slice(1);

    // Construct the password string
    const finalPassword = websiteName + "#" + infoormation.name + "@" + infoormation.birthYear;

    return finalPassword;
}

// Test cases
console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));
console.log(password({ name: "rahat" , birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky" , birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha" , birthYear: 2002 }));
