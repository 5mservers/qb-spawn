// Update the setupAppartements case in the mounted event listener
case "setupAppartements":
    viewmodel.positions = {normal: [], appartment: [], house: []};
    viewmodel.selectedValue = {type: "", name: ""};
    viewmodel.positions.appartment = data.locations;
    viewmodel.newChar = data.isNew;
    
    // Convert apartment data to match normal spawn format
    const formattedApartments = {};
    for (const [key, value] of Object.entries(data.locations)) {
        formattedApartments[key] = {
            label: value.label,
            type: 'appartment'
        };
    }
    viewmodel.positions.appartment = formattedApartments;
    break; 