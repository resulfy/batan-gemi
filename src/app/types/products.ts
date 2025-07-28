import { UserModel } from "./users"

export interface ProductModel {
    name: string
    description: string
    created_at: Date
    created_by?: UserModel
}

export interface VehicleModel extends ProductModel {
    year_of_model: number,
}

export interface AutomobileModel extends VehicleModel {
    km: number,
    year_of_model: number,
}