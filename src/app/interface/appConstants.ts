import {Label} from './schema.model';

export const appConstants = {

    /** Issue Types with ttheir hardcoded colors */
    issueTypeListWithColor: {
        [Label.Low]: {
            name: Label.Low,
            color: '#99333352'
        },
        [Label.Epic]: {
            name: Label.Epic,
            color: '#33996652'
        },
        [Label.Story]: {
            name: Label.Story,
            color: '#fff3d4'
        },
        [Label.High]: {
            name: Label.High,
            color: '#99ccff61'
        },
        [Label.Medium]: {
            name: Label.Medium,
            color: '#3d7e9a4d'
        }
    }
};
