import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface LoanApplicationState {
    currentStep: number;
    personalInfo: {
        name: string;
        email: string;
    };
    financialDetails: {
        income: number;
        employmentStatus: string;
    };
    documents: File[];
}

const initialState: LoanApplicationState = {
    currentStep: 0,
    personalInfo: {
        name: '',
        email: '',
    },
    financialDetails: {
        income: 0,
        employmentStatus: '',
    },
    documents: [],
};

const loanApplicationSlice = createSlice({
    name: 'loanApplication',
    initialState,
    reducers: {
        updateStep(state, action: PayloadAction<number>) {
            state.currentStep = action.payload;
        },
        updatePersonalInfo(state, action: PayloadAction<LoanApplicationState['personalInfo']>) {
            state.personalInfo = action.payload;
        },
        updateFinancialDetails(state, action: PayloadAction<LoanApplicationState['financialDetails']>) {
            state.financialDetails = action.payload;
        },
        updateDocuments(state, action: PayloadAction<File[]>) {
            state.documents = action.payload;
        },
    },
});

export const {
    updateStep,
    updatePersonalInfo,
    updateFinancialDetails,
    updateDocuments,
} = loanApplicationSlice.actions;

export default loanApplicationSlice.reducer;