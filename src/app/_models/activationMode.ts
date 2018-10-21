export interface IActivationMode {
    id: number;
    activationModeName: string;
    upperBound: number;
    lowerBound: number;
    activationModeDescription: string;
    createdUserId: number;
    createdUserName: string;
    createdOn: Date;
    modifiedUserId: number;
    modifiedUserName: string;
    modifiedOn: Date;
}