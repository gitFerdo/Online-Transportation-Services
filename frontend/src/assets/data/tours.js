

const tours = [
  {
    id: "01",
    v_type: "Sedan",
    v_name: "Audi A3",
    passenger: "5 Seats",
    gear_shift: "DCT",
    baggage: 2,
    door: 5,
    location: "london",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6
      },

      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    price: 400,
    photo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ6fXIEj1K_uDdbPZFbqxcvCccRD0_UGbXfkDLGUVwTUsIk77-p",
    images: [
      "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/chrome/df4f83ba93d23f0f7d0003df6a16c9a5.png",
      "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/chrome/df4f83ba93d23f0f7d0003df6a16c9a5.png",
      "https://media.whatcar.com/1200x800/wc-image/2023-01/audi-a3-interior-detail-1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv8JRge1gG5jdyRjrm4S3cmQpnyZfzmzqkg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvYk7FkLW1FESoQSmInTobT7thjJn-w7NidQ&usqp=CAU"
    ],
    features: [
      "Sleek and sporty exterior design with LED lighting.",
      "Spacious interior with premium materials and sporty S Line trim.",
      "Audi Virtual Cockpit with customizable digital display.",
      "MMI infotainment system with touchscreen and voice control.",
      "Audi pre sense safety system with driver assistance features.",
      "1.0-liter TFSI engine with smooth S Tronic automatic transmission"
    ],
  },

  {
    id: "02",
    v_type: "Sedan",
    v_name: "Honda Accord",
    passenger: "5 Seats",
    gear_shift: "CVT",
    baggage: 4,
    door: 4,
    location: "usa",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    price: 30,
    photo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTIX399nuMYRJYbEPgCWDJOeeBhkhQ7LpAFTOJ0N5i9xJ07JBAy",
    images: [
      "https://automobiles.honda.com/platform/api/v4/images/exterior/10?config=M:CY2F8PKNW$EC:NH-912P$HC:undefined$IC:BK$O:$F:FIFS$ECC:GE$ECX:&width=1400",
      "https://hips.hearstapps.com/hmg-prod/images/2023-honda-accord-hybrid-interior-1667945446.jpg?crop=0.9204545454545455xw:1xh;center,top&resize=980:*",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKfV27EDxofGu9hZ2YIveFYePykTjCSTggA&usqp=CAU",
      "https://di-uploads-pod14.dealerinspire.com/wesleychapelhonda/uploads/2020/12/2021-Honda-Accord-Seating-Banner.png",
      "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/fa2d-11001847/1HGCY2F53PA002299/b83b82fa7b235678d3755d4d813f06ec.jpg"
    ],
    features: [
      "Hybrid powertrain with 212 horsepower and great fuel efficiency.",
      "Sleek exterior with LED lighting and 19-inch alloy wheels.",
      "Spacious interior with premium materials and infotainment display.",
      "Honda Sensing driver assistance features.",
      "Infotainment system with smartphone integration and premium sound.",
      "Sporty design elements such as rear spoiler and sport-tuned suspension."
    ],
  },

  {
    id: "03",
    v_type: "Sedan",
    v_name: "Honda Civic Si",
    passenger: "5 Seats",
    gear_shift: "Manual",
    baggage: 4,
    door: 4,
    location: "london",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    price: 36,
    photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRa4WJ8SvTJM9IsmLPUOrxEuyoEEMOeaAOnlpY-iX7f-YceqTln",
    images: [
      "https://lh3.googleusercontent.com/rurYcqyB4J8IlPbkz4J0G2fBBQjGx08SX1TeyBpAhSsgebRIUYa11V9Gr4BuJ1iOKmUPctticTloJLuiuufD4cUGgIkDldiQ9MTaD03RaQ",
      "https://lh3.googleusercontent.com/MacQpOQDqun14OatrN5idAxhjU8_uCZqiZj4uGh4HwtqvuJl6bhJtDgZnH8LGrnzwP5kSC6Fwhb57EC7iTv4V9D3mYLRXmIXVy4pHVe-ww",
      "https://lh3.googleusercontent.com/itRv_5etltOFbVOXEpnS6funMN5oJ3EIbOsEKXemmPm4tAKCatjBt8lZslfCO7HRUMfOMnPJxrzIEKCUj35N4Srw2h4XXr1BpWENOx1Y",
      "https://lh3.googleusercontent.com/Fh5NqlKFNA5-e7uKmSaCuspjUo5w6tpWc2uLb1WMA-ifpQY1uebVKNazgs7QIiC50aYhiIpq5w9nQjgVOqOqPv65m9cXcty6yRYeunCb",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTa4cfLSh4JhZjj53jk6JJAynJ0D_p-oIUSw&usqp=CAU"
    ],
    features: [
      "205 horsepower turbocharged engine with six-speed manual.",
      "Sporty exterior with unique badging and 18-inch wheels.",
      "Well-equipped interior with sport seats and infotainment.",
      "Honda Sensing driver assistance features.",
      "Smartphone integration and premium sound system.",
      "Sport-tuned suspension and limited-slip differential for improved handling."
    ],
  },

  {
    id: "04",
    v_type: "SUV",
    v_name: "Honda CR-V",
    passenger: "5 Seats",
    gear_shift: "Auto",
    baggage: 4,
    door: 4,
    location: "london",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    price: 37,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrimHvHmw-0bH3IqHGxoHnSzwa19RpY0kXh9y2VFw6zb15BxFn",
    images:[
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWCmXE1JEdo-gf7xYCzTvKtmTUzscyPeynOAm_DgxPv1qVUW0k",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXqUCiWTnmWQSr5fneFd9uWvP2cOXOaV9xbO7CbRErPSBLM5vE",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQjn8fTcsExAKp5Gv2kv0iaTBbyV2eSakaX0sEufgS-TzaJ0Zd",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS7lWo7nhNaFoBCJHItlME2EkcQXcjTgResyyaazfNNgs_jzikD",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNGSu3_YZhpGMrsWP5P85IXyqI6xsXP0IjdxWXwv8LJUkxsTqV"
    ],
    features: [
      "Turbocharged engine with 190 horsepower and CVT.",
      "Stylish exterior with LED lighting and 19-inch wheels.",
      "Spacious interior with leather seats and infotainment.",
      "Honda Sensing driver assistance features.",
      "Smartphone integration and premium sound system.",
      "Power liftgate and hands-free access for convenience."
    ],
  },

  {
    id: "05",
    v_type: "SUV",
    v_name: "BMW X5",
    passenger: "5 Seats",
    gear_shift: "Auto",
    baggage: 3,
    door: 4,
    location: "england",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    price: 450,
    photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-4q4Ct8DYQ3yzEgMIOe3Cczl28bUsMftkDApkJpzQFXKnGySh",
    images: [
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTyKWzztJz-KRs86YVxHtg65VYMFsRa4x57DhiKJ8WbAQQQ6mkH",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4_zMrg4n8uYQFwhRYZWmG9Hq9yPamZmKH5GrgIe-oxu6MrHc",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQOwX2eraNZ5yIJ-g15HRWlRsav2REaZwUCUOqlowaRT2Wuxrsv",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ3t_i2D4udMpe2sC6LtTE-8dE0fzlzmrgB7WmI4m_OXK36_9h8",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQlLSadZgntcjCPhGqitwOQZ1H2dOkCqDAEjrtaR7nc-CBy8-Ib"
    ],
    features: [
      "Turbocharged engine with up to 382 horsepower and 8-speed automatic.",
      "Sporty exterior with LED lighting and 18-19 inch wheels.",
      "Luxurious interior with infotainment system.",
      "BMW's advanced driver assistance technology.",
      "Smartphone integration and premium sound system.",
      "Optional features like panoramic moonroof and heated seats."
    ],
  },

  {
    id: "06",
    v_type: "Minivan",
    v_name: "Kia Sedona LX",
    passenger: "8 Seats",
    gear_shift: "Auto",
    baggage: 5,
    door: 4,
    location: "england",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    price: 320,
    photo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRC44KIv3OgJayKhjhXhVNbtp9-8SPfNQT6U6hRJMZGf7AvliE7",
    images: [
      "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/03/2019-Kia-Sedona-107.jpg?resize=480:*",
      "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/03/2019-Kia-Sedona-117.jpg?resize=480:*",
      "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/03/2019-Kia-Sedona-114.jpg?resize=480:*",
      "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/03/2019-Kia-Sedona-112.jpg?resize=480:*",
      "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/03/2019-Kia-Sedona-110.jpg?resize=480:*"
    ],
    features: [
      "V6 engine with 276 horsepower and 8-speed automatic.",
      "Spacious interior with infotainment system.",
      "Standard safety features including rearview camera and blind spot detection.",
      "Optional rear seat entertainment system and power sliding doors."
    ]
  },

  {
    id: "07",
    v_type: "Pickup Truck",
    v_name: "Ford F-150",
    passenger: "3 Seats",
    gear_shift: "Auto",
    baggage: 8,
    door: 2,
    location: "madrid",
    reviews: [],
    avgRating: 4.5,
    price: 320,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3z0NZNiubDIHEwaZ5IBjKoltQ2sidnclzNow0nCNGoAQ82fZr",
    images: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLvqeErLqop3EVpusDXgHC6h4H0-shUYkabLrCiODzC68wigDZ",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPXfPBzlbbOqXzduanZMf_MhKGS9Db7zfU-_JzD4z1wLNxYRYV",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJFN4mbeUHbnUdNUczsuIEH_eo3Hn2ZuQ80rf7TzQa8wvVLeR",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqJONyuYiZIU6HDqev90tszPW5TdbNSa8ZHiAjPrF_3RD8wmTt",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSps8SwtlSun-XekhsJezMKvk2PYm45Dgq0zO7CI_pgUSBCCiIx"
    ],
    features: [
      "V6 engine with 325 horsepower and 10-speed automatic.",
      "Rugged exterior with 17-inch wheels and daytime running lights.",
      "Basic interior with vinyl seats and infotainment system.",
      "Standard safety features including automatic emergency braking and rearview camera."
    ],
  },

  {
    id: "08",
    v_type: "Passenger Van",
    v_name: "Nissan NV",
    passenger: "12 Seats",
    gear_shift: "Auto",
    baggage: 6,
    door: 3,
    location: "madrid",
    reviews: [],
    avgRating: 4.5,
    price: 200,
    photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS8bl1N5FDrACDa3HMhQbBMesKKsOuLMMGB7ItirSawvFYPofK4",
    images: [
      "https://listings-prod.tcimg.net/listings/214235/40/12/5BZBF0AA2LN851240/YY2GFS3TF5EGEU6QFR5VBW3CNI-cr-540.jpg",
      "https://listings-prod.tcimg.net/listings/214235/40/12/5BZBF0AA2LN851240/JSSQODAGAQ5PC6M6YIGGUIIOFA-cr-540.jpg",
      "https://listings-prod.tcimg.net/listings/214235/40/12/5BZBF0AA2LN851240/SGHASCD725RMKZE5FZOSQZ5VZM-cr-540.jpg",
      "https://listings-prod.tcimg.net/listings/214235/40/12/5BZBF0AA2LN851240/4KFDZYQF76OFILSTKCOLY6WFYM-cr-540.jpg",
      "https://listings-prod.tcimg.net/listings/214235/40/12/5BZBF0AA2LN851240/5EN6NDZT4MRLUUM4FEUZPAFKYA-cr-540.jpg"
    ],
    features: [
      "V8 engine with 375 horsepower and 7-speed automatic.",
      "Spacious interior with seating for 12 passengers.",
      "Basic infotainment system with optional upgrades.",
      "Standard safety features including rearview camera and parking sensors."
    ],
  },

];

export default tours;