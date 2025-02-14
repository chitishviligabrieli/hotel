export interface BestRoomsProps {
    id: number;
    image: string;
    room: number;
    guest: number;
    sale: number;
}

export interface BestRoom {
    bestRooms: BestRoomsProps[];
}


export interface ButtonProps {
    action: () => void;
    size: 'big' | 'small' | 'medium';
    value: string;
    icon?: string;
}


export interface MainProps {
    h1: string;
    slogan: string;
    onSearch: () => void;
}

export interface NavbarItemProps {
    active: boolean;
    pathname: string;
    title: string;
}

export interface counterProps {
    count: number;
    object: string;
}


export interface Image {
    src: string;
    alt: string;
}

export interface ImagesContainerProps {
    type: "type1" | "type2";
    images: Image[];
}

export interface PlansProps {
    id: number;
    plaName: string;
    price: number;
    popular: boolean;
    used: number;
    nights: number;
    days: number;
    onClick: () => void;
}

export interface BestPlansProps  {
    bestPlans: PlansProps[]
    onClick: () => void;
}

export interface FilterProps {
    onSearch: () => void;
}

export interface DateDropdownProps {
    title: string;
    selectedDate: Date | null;
    onChange: (date: Date | null) => void;
    minDate?: Date;
    disabled?: boolean;
}