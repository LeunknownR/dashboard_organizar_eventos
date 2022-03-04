
export const initialFormStep1 = { 
    part1: {
        title: "",
        description: "",
        resaltEvent: true 
    }, 
    part2: {
        eventTypeId: 0,
        eventSubtypeId: 0, 
        graphicId: 0
    }, 
    part3: {
        date: {
            start: undefined, 
            end: undefined
        },
        daysIds: [],
        shifts: Array(7).fill({
                timeStart: undefined,  
                timeEnd: undefined
            })
    }
};

export const initialFormStep2 = {
    part1: {
        organizerId: 0, 
        teacherId: 0,
        teacherFullName: ""
    },
    part2: {
        locationId: 0
    },
    part3: {
        quantityVacancy: 0, 
        publicByCampusIds: []
    }
};