const fixDescriptionLength = (suppliedDescription) => {
    let charCount = 0;
    const maxCharCount = 88;
    let fixedDescriptionArray: string[] = [];

    if (!!suppliedDescription) {

        const splitSuppliedDescription = suppliedDescription.split(" ");

        for (let i = 0; i < splitSuppliedDescription.length; i++) {
            charCount += splitSuppliedDescription[i].length;

            if (charCount < maxCharCount) {
                fixedDescriptionArray.push(splitSuppliedDescription[i]);
            }
            else {
                fixedDescriptionArray.push(" (...)");
                return fixedDescriptionArray.join(" ");
            }
        }
    }

    return suppliedDescription;
}

export default fixDescriptionLength;