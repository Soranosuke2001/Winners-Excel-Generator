type formFieldType = {
    name: "cartons" | "ratio" | "skids" | "regular" | "bigBox" | "loose" | "eightFeet" | "associates" | "totalMin" | "startTime" | "endTime" | "breakTime",
    label: "Cartons" | "Ratio" | "Skids" | "Regular" | "Big Box" | "Loose" | "8 Feet" | "Associates" | "Total Minutes" | "Start Time" | "End Time" | "Break Time",
    description: string
}

export const formFields : formFieldType[] = [
    {
        name: "cartons",
        label: "Cartons",
        description: "Number of cartons received",
    },
    {
        name: "ratio",
        label: "Ratio",
        description: "Test",
    },
    {
        name: "skids",
        label: "Skids",
        description: "Test",
    },
    {
        name: "regular",
        label: "Regular",
        description: "Test",
    },
    {
        name: "bigBox",
        label: "Big Box",
        description: "Test",
    },
    {
        name: "loose",
        label: "Loose",
        description: "Test",
    },
    {
        name: "eightFeet",
        label: "8 Feet",
        description: "Test",
    },
    {
        name: "associates",
        label: "Associates",
        description: "Test",
    },
    {
        name: "totalMin",
        label: "Total Minutes",
        description: "Test",
    },
    {
        name: "startTime",
        label: "Start Time",
        description: "Start Time",
    },
    {
        name: "endTime",
        label: "End Time",
        description: "End TIme",
    },
    {
        name: "breakTime",
        label: "Break Time",
        description: "Total Break TIme",
    },
]