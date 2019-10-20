export default class Weather {

    // @ts-ignore
    public coord: {
        lon: number;
        lat: number
    };
    // @ts-ignore
    public weather: Array<{
        id: number;
        main: string;
        description: string;
        icon: string;
    }>;
    // @ts-ignore
    public base: string;
    // @ts-ignore
    public main: {
        temp: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
        sea_level: number;
        grnd_level: number;
    };
    // @ts-ignore
    public wind: {
        speed: number;
        deg: number;
    };
    // @ts-ignore
    public clouds: {
        all: number;
    };
    // @ts-ignore
    public dt: number;
    // @ts-ignore
    public sys: {
        message: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    // @ts-ignore
    public id: number;
    // @ts-ignore
    public name: string;
    // @ts-ignore
    public cod: number;

    constructor(args?: {}) {
        Object.assign(this, args);
    }
}
