export default function handler(req, res) {
  res.status(200).json(vehicleListings);
}

const vehicleListings = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    rentalPricePerDay: 50,
    location: "Lagos, Nigeria",
    availability: true,
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb",
    ],
    features: [
      { name: "Transmission", value: "Automatic" },
      { name: "Air Conditioning", value: "Yes" },
      { name: "GPS", value: "Included" },
      { name: "Bluetooth", value: "Available" },
    ],
    owner: {
      name: "John Doe",
      contact: "+2348012345678",
    },
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2019,
    rentalPricePerDay: 45,
    location: "Abuja, Nigeria",
    availability: true,
    images: [
      "https://images.unsplash.com/photo-1590236541266-3f1c16980c5d",
      "https://images.unsplash.com/photo-1590236541266-3f1c16980c5d",
    ],
    features: [
      { name: "Transmission", value: "Manual" },
      { name: "Air Conditioning", value: "Yes" },
      { name: "USB Charging Port", value: "Available" },
    ],
    owner: {
      name: "Jane Smith",
      contact: "+2348098765432",
    },
  },
  {
    id: 3,
    make: "Ford",
    model: "Explorer",
    year: 2022,
    rentalPricePerDay: 70,
    location: "Ibadan, Nigeria",
    availability: false,
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
    ],
    features: [
      { name: "Drive", value: "4WD" },
      { name: "Air Conditioning", value: "Yes" },
      { name: "Cruise Control", value: "Included" },
      { name: "Sunroof", value: "Yes" },
    ],
    owner: {
      name: "Michael Johnson",
      contact: "+2348076543210",
    },
  },
  {
    id: 4,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2021,
    rentalPricePerDay: 100,
    location: "Port Harcourt, Nigeria",
    availability: true,
    images: [
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068",
    ],
    features: [
      { name: "Interior", value: "Luxury" },
      { name: "Transmission", value: "Automatic" },
      { name: "GPS", value: "Included" },
      { name: "Bluetooth", value: "Available" },
    ],
    owner: {
      name: "Emily Davis",
      contact: "+2348032109876",
    },
  },
  {
    id: 5,
    make: "Hyundai",
    model: "Elantra",
    year: 2018,
    rentalPricePerDay: 40,
    location: "Kano, Nigeria",
    availability: true,
    images: [
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938",
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938",
    ],
    features: [
      { name: "Transmission", value: "Automatic" },
      { name: "Air Conditioning", value: "Yes" },
      { name: "Eco Mode", value: "Enabled" },
    ],
    owner: {
      name: "Aliyu Musa",
      contact: "+2348056781234",
    },
  },
];
