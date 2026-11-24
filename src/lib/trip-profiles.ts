export type Style = "adventure" | "nature" | "beach" | "culture";
export type Pace = "adventurous" | "balanced" | "relaxed";
export type Difficulty = "easy" | "moderate" | "hard";
export type Region =
  | "brasil"
  | "southAmerica"
  | "centralAmerica"
  | "europe"
  | "nordic"
  | "asia";

export type TripProfile = {
  styles: Style[];
  pace: Pace;
  difficulty: Difficulty;
  region: Region;
  mixed?: boolean;
};

const DEFAULT_PROFILE: TripProfile = {
  styles: ["culture"],
  pace: "balanced",
  difficulty: "easy",
  region: "brasil",
};

// matched in order against the trip slug; first hit wins
const profiles: [RegExp, TripProfile][] = [
  [/^lencois-maranhenses-3$/, { styles: ["adventure", "nature"], pace: "adventurous", difficulty: "moderate", region: "brasil", mixed: true }],
  [/^lencois/, { styles: ["adventure", "nature"], pace: "adventurous", difficulty: "moderate", region: "brasil" }],
  [/^jalapao/, { styles: ["adventure", "nature"], pace: "adventurous", difficulty: "moderate", region: "brasil" }],
  [/^surfcamp|^sailing/, { styles: ["beach", "adventure"], pace: "balanced", difficulty: "easy", region: "brasil" }],
  [/^amazonia-casais/, { styles: ["nature", "adventure", "culture"], pace: "balanced", difficulty: "moderate", region: "brasil", mixed: true }],
  [/^amazonia/, { styles: ["nature", "adventure", "culture"], pace: "balanced", difficulty: "moderate", region: "brasil" }],
  [/^atacama-uyuni/, { styles: ["nature", "adventure"], pace: "adventurous", difficulty: "moderate", region: "southAmerica" }],
  [/^atacama/, { styles: ["nature", "culture"], pace: "balanced", difficulty: "easy", region: "southAmerica" }],
  [/^itacare/, { styles: ["beach", "nature", "adventure"], pace: "balanced", difficulty: "easy", region: "brasil" }],
  [/^reveillon-caraiva/, { styles: ["beach", "culture"], pace: "relaxed", difficulty: "easy", region: "brasil" }],
  [/^lombok-bali/, { styles: ["beach", "culture", "nature"], pace: "balanced", difficulty: "easy", region: "asia" }],
  [/^filipinas/, { styles: ["beach", "adventure", "nature"], pace: "adventurous", difficulty: "moderate", region: "asia" }],
  [/^peru/, { styles: ["culture", "adventure", "nature"], pace: "adventurous", difficulty: "moderate", region: "southAmerica" }],
  [/^espanha/, { styles: ["beach", "culture"], pace: "balanced", difficulty: "easy", region: "europe" }],
  [/^dolomitas/, { styles: ["nature", "adventure"], pace: "adventurous", difficulty: "moderate", region: "europe" }],
  [/^cote-dazur/, { styles: ["culture", "beach"], pace: "relaxed", difficulty: "easy", region: "europe" }],
  [/^costa-rica/, { styles: ["beach", "adventure", "nature"], pace: "balanced", difficulty: "easy", region: "centralAmerica" }],
  [/^monte-roraima/, { styles: ["adventure", "nature"], pace: "adventurous", difficulty: "hard", region: "brasil", mixed: true }],
  [/^laponia/, { styles: ["nature", "adventure"], pace: "balanced", difficulty: "easy", region: "nordic" }],
  [/^nicaragua/, { styles: ["beach", "adventure", "culture"], pace: "balanced", difficulty: "easy", region: "centralAmerica" }],
];

export function getTripProfile(slug: string): TripProfile {
  return profiles.find(([re]) => re.test(slug))?.[1] ?? DEFAULT_PROFILE;
}
