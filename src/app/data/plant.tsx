export type Plant = {
  care_difficulty: string;
  category: string;
  common_name: string;
  description: string;
  family: string;
  fertilizer_frequency: string;
  fertilizer_type: string;
  growth_rate: string;
  humidity_preference: string;
  light: string;
  mature_size: string;
  max_temp_f: string;
  min_temp_f: string;
  plant_id: string;
  plant_type: string;
  pruning_notes: string;
  scientific_name: string;
  toxic_to_humans: string;
  toxic_to_pets: string;
  watering_interval_days: string;
  watering_notes: string;
}

export interface PlantParameter {
  pd: Plant | null;
}
