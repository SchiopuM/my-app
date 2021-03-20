const REVERSE_STRING = 'REVERSE_STRING'
const RECTANGULAR = 'RECTANGULAR'

const initialState = {
    algorithmData: {
        reverseString: {
            title: 'Reverse String',
            description: 'This algorithm reverses your string',
            result: '',
            algorithm: (str) => {
                let newArr = [];
                let revArr = [];
                let step = str.length;
                let rev = "";

                for (let i = 0; i < str.length; i++) {
                    newArr.push(str[i]);
                }
                for (let j = 0; j < str.length; j++) {
                    step = step - 1;
                    revArr.push(newArr[step]);
                }

                for (let k = 0; k < revArr.length; k++) {
                    rev = rev + revArr[k];
                }
                return rev;
            }
        },
        rectangular: {
            title: 'Rectangular',
            description: 'This algorithm returns a rectangular',
            result: '',
            algorithm: (h, w) => {
                let height = ''
                let wid = ''
                let rect = ''
                let spaces = ''
                for (let i = 0; i < w; i++) {
                    wid = wid + '@'
                }
                for (let s = 0; s < w - 2; s++) {
                    spaces = spaces + ' '
                }
                for (let j = 0; j < h - 2; j++) {
                    height = `${height}  @ ${spaces} @ \n`
                }
                rect = rect + wid + '\n' + height + wid
                return rect
            }
        },
    },
}

const algorithmsReducer = (state = initialState, action) => {

    switch (action.type) {

        case REVERSE_STRING:
            let str = action.text
            return {
                ...state,
                algorithmData: {...state.algorithmData, reverseString: {...state.algorithmData.reverseString, result: state.algorithmData.reverseString.algorithm(str)}}
            };

        case RECTANGULAR:
            const h = action.h
            const w = action.w

            return {
                ...state,
                algorithmData: {...state.algorithmData, rectangular: {...state.algorithmData.rectangular, result: state.algorithmData.rectangular.algorithm(h,w)}}
            };

        default:
            return state
    }
}

export const reverseStringAC = (text) => {
    return {
        type: REVERSE_STRING,
        text: text
    }
}


export const rectangularAC = (h, w) => {
    return {
        type: RECTANGULAR,
        h: h,
        w: w
    }
}


export default algorithmsReducer






























