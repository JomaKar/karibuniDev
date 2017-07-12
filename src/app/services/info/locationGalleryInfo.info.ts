export let locGalleryItems = [
	{
		catName: 'Locations',
		items: [
			{
				img: 'int1.jpg',
				imgUrl: 'assets/locations/gallery/Locations/int1.jpg',
				name: 'Interior',
				id: 1
			},
			{
				img: 'ext1.jpg',
				imgUrl: 'assets/locations/gallery/Locations/ext1.jpg',
				name: 'Exterior',
				id: 2
			},
			{
				img: 'str1.jpg',
				imgUrl: 'assets/locations/gallery/Locations/str1.jpg',
				name: 'Storeroom',
				id: 3
			},
			{
				img: 'int2.jpg',
				imgUrl: 'assets/locations/gallery/Locations/int2.jpg',
				name: 'Interior',
				id: 4
			},
			{
				img: 'str2.jpg',
				imgUrl: 'assets/locations/gallery/Locations/str2.jpg',
				name: 'Storeroom',
				id: 5
			},
			{
				img: 'ind1.jpg',
				imgUrl: 'assets/locations/gallery/Locations/ind1.jpg',
				name: 'Industrial',
				id: 6
			},
			{
				img: 'int3.jpg',
				imgUrl: 'assets/locations/gallery/Locations/int3.jpg',
				name: 'Interior',
				id: 7
			},
			{
				img: 'hall.jpg',
				imgUrl: 'assets/locations/gallery/Locations/hall.jpg',
				name: 'Hall',
				id: 8
			},
			{
				img: 'ind2.jpg',
				imgUrl: 'assets/locations/gallery/Locations/ind2.jpg',
				name: 'Industrial',
				id: 9
			},
			{
				img: 'ind3.jpg',
				imgUrl: 'assets/locations/gallery/Locations/ind3.jpg',
				name: 'Industrial',
				id: 10
			},
			{
				img: 'str3.jpg',
				imgUrl: 'assets/locations/gallery/Locations/str3.jpg',
				name: 'Storeroom',
				id: 11
			},
			{
				img: 'int4.jpg',
				imgUrl: 'assets/locations/gallery/Locations/int4.jpg',
				name: 'Interior',
				id: 12
			},
			{
				img: 'int5.jpg',
				imgUrl: 'assets/locations/gallery/Locations/int5.jpg',
				name: 'Interior',
				id: 13
			},
			{
				img: 'str4.jpg',
				imgUrl: 'assets/locations/gallery/Locations/str4.jpg',
				name: 'Storeroom',
				id: 14
			},
			{
				img: 'str5.jpg',
				imgUrl: 'assets/locations/gallery/Locations/str5.jpg',
				name: 'Storeroom',
				id: 15
			},
			{
				img: 'int6.jpg',
				imgUrl: 'assets/locations/gallery/Locations/int6.jpg',
				name: 'Interior',
				id: 16
			},
			{
				img: 'hall2.jpg',
				imgUrl: 'assets/locations/gallery/Locations/hall2.jpg',
				name: 'Hall',
				id: 17
			},
			{
				img: 'hall3.jpg',
				imgUrl: 'assets/locations/gallery/Locations/hall3.jpg',
				name: 'Hall',
				id: 18
			},
			{
				img: 'ind4.jpg',
				imgUrl: 'assets/locations/gallery/Locations/ind4.jpg',
				name: 'Industrial',
				id: 19
			},
			{
				img: 'ind5.jpg',
				imgUrl: 'assets/locations/gallery/Locations/ind5.jpg',
				name: 'Industrial',
				id: 20
			}
		]
	}
];

export let futureModels = [
	{
		catName: 'Interiors',
		items: [
			{
				img: '',
				name: '',
				id: 0
			},
			{

			},
			{

			}
		]
	},
	{

	},
	{

	}
];


export let locations = [
	{
		id: 1,
		info: {
			images: ['assets/locations/gallery/Locations/int1.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str1.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind2.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio incidunt esse corporis repudiandae molestias ducimus, quisquam recusandae ex aperiam iste veritatis autem, obcaecati porro facilis vero iure nemo nesciunt animi.',
			squareMeters: 100,
			name: 'Location 1',
			floor: 2,
			orientation: 'south',
			productionFacilities: {
				wifi: true,
				makeup: true,
				costume: false,
				water: true,
				electricity: 16,
				toilets: true 
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 2,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/int1.jpg',
					 'assets/locations/gallery/Locations/str1.jpg',
					 'assets/locations/gallery/Locations/ind3.jpg',
					 'assets/locations/gallery/Locations/ind2.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi rem praesentium tenetur dolore ipsam dicta, in dignissimos soluta sit consectetur mollitia aspernatur vitae. Sapiente porro, deleniti molestias error unde officiis.',
			squareMeters: 200,
			name: 'Location 2',
			floor: 4,
			orientation: 'north',
			productionFacilities: {
				wifi: true,
				makeup: false,
				costume: true,
				water: true,
				electricity: 32,
				toilets: true 
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 3,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia consequuntur at, excepturi aperiam reprehenderit quam perferendis, blanditiis fugiat dicta quo iure laborum veritatis reiciendis rem voluptas ratione sit eius. Asperiores.',
			squareMeters: 400,
			name: 'Location 3',
			floor: 3,
			orientation: 'east',
			productionFacilities: {
				wifi: true,
				makeup: false,
				costume: true,
				water: true,
				electricity: 63,
				toilets: true
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 4,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/ind2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis laboriosam corporis minima aliquam voluptatibus magni blanditiis ab similique accusantium est incidunt id reprehenderit quibusdam ullam vel architecto, qui nisi dolores.',
			squareMeters: 320,
			name: 'Location 4',
			floor: 2,
			orientation: 'west',
			productionFacilities: {
				wifi: true,
				makeup: true,
				costume: true,
				water: true,
				electricity: 32,
				toilets: true
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 5,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laboriosam voluptates recusandae odio! Laudantium cupiditate fugiat impedit aperiam voluptatem voluptatum, sequi! Ad magni eveniet amet sit itaque obcaecati id magnam.',
			squareMeters: 500,
			name: 'Location 5',
			floor: 2,
			orientation: 'south',
			productionFacilities: {
				wifi: true,
				makeup: false,
				costume: true,
				water: false,
				electricity: 16,
				toilets: true
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 6,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore consequuntur, omnis in cum nam. Amet, ipsa, consequatur. Consequuntur eligendi, eaque asperiores incidunt, porro tempora accusantium blanditiis ad, odio dolores quod?',
			squareMeters: 250,
			name: 'Location 6',
			floor: 4,
			orientation: 'north',
			productionFacilities: {
				wifi: true,
				makeup: false,
				costume: false,
				water: false,
				electricity: 63,
				toilets: true
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 7,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit minus perferendis voluptate porro non magni at, officia, error incidunt dolorum, illo expedita tenetur necessitatibus architecto accusamus? Atque enim, porro fugit!',
			squareMeters: 400,
			name: 'Location 7',
			floor: 2,
			orientation: 'east',
			productionFacilities: {
				wifi: true,
				makeup: false,
				costume: false,
				water: true,
				electricity: 32,
				toilets: true
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 8,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae temporibus est tempora dolor iure, laboriosam asperiores molestias ad a ipsa. Blanditiis molestiae accusantium, dolores laudantium magnam dolorem architecto, velit et.',
			squareMeters: 430,
			name: 'Location 8',
			floor: 1,
			orientation: 'east',
			productionFacilities: {
				wifi: true,
				makeup: true,
				costume: true,
				water: true,
				electricity: 63,
				toilets: true
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 9,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde est illo quidem, qui laborum corporis repellendus sint quos. Odit tempore sit, eos cumque dicta atque ipsam, deserunt blanditiis molestias illum.',
			squareMeters: 100,
			name: 'Location 9',
			floor: 3,
			orientation: 'west',
			productionFacilities: {
				wifi: true,
				makeup: false,
				costume: false,
				water: true,
				electricity: 32,
				toilets: true
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 10,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iste quibusdam dolore soluta iure eveniet, earum dolores, libero, eum laborum nisi ipsam enim amet mollitia dignissimos quae eos totam asperiores?',
			squareMeters: 200,
			name: 'Location 10',
			floor: '',
			orientation: '',
			productionFacilities: {
				wifi: true,
				makeup: false,
				costume: true,
				water: true,
				electricity: 63,
				toilets: true
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 11,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit deserunt, maxime officia officiis fugiat eos eius nesciunt repellat dolor blanditiis, laborum quidem neque quam quas dolore? Laborum nostrum, sequi. Esse.',
			squareMeters: 100,
			name: 'Location 11',
			floor: 3,
			orientation: 'south',
			productionFacilities: {
				wifi: true,
				makeup: false,
				costume: true,
				water: false,
				electricity: 32,
				toilets: false
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 12,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi ad sint delectus quo! Expedita doloribus ea amet deserunt. Expedita iste quaerat commodi ad repudiandae est quidem quod corporis incidunt.',
			squareMeters: 240,
			name: 'Location 12',
			floor: 2,
			orientation: 'north',
			productionFacilities: {
				wifi: true,
				makeup: false,
				costume: false,
				water: true,
				electricity: 16,
				toilets: false
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 13,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolorum debitis, in ratione, quibusdam eveniet adipisci eum! Optio magni omnis incidunt sit, amet asperiores eius vitae, tempora cum maiores minima?',
			squareMeters: 350,
			name: 'Location 13',
			floor: 1,
			orientation: 'west',
			productionFacilities: {
				wifi: true,
				makeup: true,
				costume: true,
				water: true,
				electricity: 63,
				toilets: false
			},
			parkingSpace: {
				size: 200,
				distance: 30
			}
		}
	},
	{
		id: 14,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, nam, quidem. Optio architecto, veritatis hic tenetur ex nisi maxime eligendi laudantium dolore et repellendus laboriosam deleniti, voluptate maiores. Ea, earum.',
			squareMeters: 100,
			name: 'Location 14',
			floor: 1,
			orientation: 'south',
			productionFacilities: {
				wifi: true,
				makeup: false,
				costume: false,
				water: true,
				electricity: 16,
				toilets: true
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 15,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloremque, omnis explicabo repellat eveniet maiores, facere sint voluptatem quo nam vitae mollitia numquam tempora, impedit sed a quas. Impedit, ex.',
			squareMeters: 100,
			name: 'Location 15',
			floor: 4,
			orientation: 'south',
			productionFacilities: {
				wifi: true,
				makeup: false,
				costume: false,
				water: true,
				electricity: 32,
				toilets: true
			},
			parkingSpace: {
				size: 200,
				distance: 50
			}
		}
	},
	{
		id: 16,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda veniam sapiente quos ut laborum, quis blanditiis eum voluptates recusandae. Quasi earum odit pariatur hic esse maxime illum quos excepturi nemo!',
			squareMeters: 200,
			name: 'Location 16',
			floor: 3,
			orientation: 'east',
			productionFacilities: {
				wifi: true,
				makeup: true,
				costume: true,
				water: true,
				electricity: 16,
				toilets: true
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 17,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur asperiores amet hic possimus dignissimos aut mollitia inventore! Nam sed, nesciunt, minus quia perferendis blanditiis corrupti odit temporibus cum, ad quis!',
			squareMeters: 200,
			name: 'Location 17',
			floor: 1,
			orientation: 'west',
			productionFacilities: {
				wifi: true,
				makeup: false,
				costume: true,
				water: true,
				electricity: 63,
				toilets: false
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 18,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate cumque suscipit qui culpa veniam fugit asperiores neque repudiandae. Ad animi laborum accusamus architecto, quas aliquam a eveniet aperiam nostrum dicta!',
			squareMeters: 100,
			name: 'Location 18',
			floor: 2,
			orientation: 'east',
			productionFacilities: {
				wifi: true,
				makeup: false,
				costume: true,
				water: true,
				electricity: 32,
				toilets: false
			},
			parkingSpace: {
				size: 200,
				distance: 30
			}
		}
	},
	{
		id: 19,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad magni facere minima necessitatibus ex, similique! Dolore et cum ut aperiam tenetur commodi accusamus illum, facilis ipsam alias, porro, veritatis repellat.',
			squareMeters: 300,
			name: 'Location 19',
			floor: 2,
			orientation: 'south',
			productionFacilities: {
				wifi: true,
				makeup: true,
				costume: true,
				water: true,
				electricity: 63,
				toilets: true
			},
			parkingSpace: {
				size: 200,
				distance: 20
			}
		}
	},
	{
		id: 20,
		info: {
			images: ['assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/ext1.jpg',
					 'assets/locations/gallery/Locations/str3.jpg',
					 'assets/locations/gallery/Locations/int2.jpg',
					 'assets/locations/gallery/Locations/str2.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg',
					 'assets/locations/gallery/Locations/ind1.jpg'],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas harum, beatae eveniet, nemo, unde assumenda voluptatem dolor nostrum at, tenetur repellat facilis molestias. Molestias aut, doloribus. Fugit dolore, nemo nihil!',
			squareMeters: 200,
			name: 'Location 20',
			floor: 4,
			orientation: 'north',
			productionFacilities: {
				wifi: true,
				makeup: false,
				costume: false,
				water: true,
				electricity: 16,
				toilets: true
			},
			parkingSpace: {
				size: 200,
				distance: 60
			}
		}
	}
]
