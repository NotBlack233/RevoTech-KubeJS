type ResearchItem = "stone_plate" | "wood_slip" | "paper_stack" | "punch_tape" | "disk_drive" | "quantum_medium"
type EurekaType = {items: {item: Internal.Item_, count: number}[], ingredients?: {item: Internal.Ingredient_, count: number}[], points: number, total_times: number, times: number}
type TechTreeType = {[stage: string]: {points: number, item: ResearchItem, eureka: {[id: string]: EurekaType}}}
