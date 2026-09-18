export type UserPlant = {
  user_plant_id: string;
  nickname: string;
  notes: string;
  isIndoor: boolean;
  dateAcquired: string;
  fertilizerInterval: number;
  lastFertilized: string;
  lastWatered: string;
  location: string;
  plant_id: number;
  user_id: number;
  waterAmount: number;
  waterInterval: number;
};

export interface UserPlantParameter {
  upd: UserPlant | null;
}
