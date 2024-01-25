const LayoutType = {
    LAYOUT_REIMBURSEMENT_TYPE: 1,
    LAYOUT_FIRSTBOT_MESSAGE: 2,
    LAYOUT_JOURNEY_LIST: 3,
    LAYOUT_CURRENCY_TYPE: 4,
    LAYOUT_UPLOAD_IMAGE: 5,
    LAYOUT_USER_MESSAGE: 6,
    LAYOUT_CATEGORY_TYPE: 7,
    LAYOUT_REIMBURSEMENT_DETAILS: 8,
    LAYOUT_HOTEL: 9,
    LAYOUT_CATEGORY_LIST: 10,
    LAYOUT_TRACK_REIMBURSEMENT_REQUEST: 11,
    LAYOUT_BRIEF_DESCRIPTION: 12,
    LAYOUT_REIMBURSEMENT_LIST: 13,
    LAYOUT_SELECTED_CATEGORY: 14
}



const getNewReimbursmentItem = () => {
    return  {
        viewType: undefined,
        text: undefined,
        textthree: undefined,
        textfour: undefined,
        textfive: undefined,
        bookingSrcLocation: undefined,
        tvReimbursementDate: undefined,
        btnCamera: undefined,
        textlocation: undefined,
        tvCategoryType: undefined,
        autoCompleteCurrencyType: undefined,
        tvRbTitle: undefined,
        chatDetailsItem: {
            _id: undefined,
            media: undefined,
            mediaType: undefined,
            message: undefined,
            messageType: undefined,
            options: {
                active: undefined,
                isSelected: undefined,
                selectedOption: undefined,
                textEditorInput: undefined
            },
            senderId: undefined,
            timeStamp: undefined,
        },
        tvRbCategory: undefined,
        tvaccountantDesc: undefined,
        btnTrackReimbursementRequest: undefined,
        edtBriefDescritpion: undefined,
        reimbursementRequest: undefined,
        reimbursementBill: {
            billId: undefined,
            reimbursementBillType: undefined,
            reimbursementBillTypeId: undefined,
            currency: undefined,
            amount: undefined,
            imagePath: [],
            userDescription: undefined,
            accountantDescription: undefined,
            isAccountantAction: undefined,
            applicationStatus: undefined,
            stackholderAction: undefined,
            stackholderDescription: undefined
        }

    };
}
export {
    LayoutType,getNewReimbursmentItem
}