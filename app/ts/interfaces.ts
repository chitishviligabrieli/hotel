export interface BestRoomsProps  {
    id: number;
    image: string;
    room: number;
    guest: number;
    sale: number;
}

export interface  BestRoom{
    bestRooms: BestRoomsProps[];
}


export interface ButtonProps{
    action: () => void;
    size: 'big' | 'small' | 'medium';
    value: string;
    icon?: string;
}