/* eslint-disable no-shadow */
import { City } from '../index';
import { ICity } from '../interface';

const executeAllTests = (City: any) => {
	describe('Check for City Module', () => {
		test('Check Cities for Delhi', () => {
			const countryCode = 'IN';
			const stateCode = 'DL';
			const cities: any = City.getCitiesOfState(countryCode, stateCode);
			const names = cities.map((city: ICity) => {
				return city.name;
			});
			expect(names).toEqual([
				'Alipur',
				'Bawana',
				'Central Delhi',
				'Delhi',
				'Deoli',
				'East Delhi',
				'Karol Bagh',
				'Najafgarh',
				'Nangloi Jat',
				'Narela',
				'New Delhi',
				'North Delhi',
				'North East Delhi',
				'North West Delhi',
				'Pitampura',
				'Rohini',
				'South Delhi',
				'South West Delhi',
				'West Delhi',
			]);
		});

		test('Check Cities for undefined State', () => {
			let countryCode;
			const stateCode = 'DL';
			const cities: any = City.getCitiesOfState(countryCode, stateCode);

			expect(cities.length).toEqual(0);
		});

		test('Check Cities for undefined State', () => {
			const countryCode = 'IN';
			let stateCode;
			const cities: any = City.getCitiesOfState(countryCode, stateCode);
			expect(cities.length).toEqual(0);
		});

		test('Check active bug cities for Portugal', () => {
			const cities: ICity[] = City.getCitiesOfState('PT', '09');
			const names = cities.map((city: ICity) => city.name);

			expect(names).toEqual(expect.arrayContaining([
				'Alfragide',
				'Algueirão',
				'Alhandra',
				'Arruda Dos Vinhos',
				'Camarate',
				'Cascais',
				'Estoril',
				'Linda-a-Velha',
				'Mem Martins',
				'Moita dos Ferreiros',
				'Monte Estoril',
				'Moscavide',
				'Queluz',
				'Sintra (town)',
			]));
		});

		test('Check active bug cities for Cyprus', () => {
			const cities: ICity[] = City.getCitiesOfState('CY', '06');
			const names = cities.map((city: ICity) => city.name);

			expect(names).toContain('Karavas (Alsancak)');
		});

		test('Check active bug cities for Greece', () => {
			const kefaloniaCities = City.getCitiesOfState('GR', '23').map((city: ICity) => city.name);
			const lefkadaCities = City.getCitiesOfState('GR', '24').map((city: ICity) => city.name);

			expect(kefaloniaCities).toEqual(expect.arrayContaining([
				'Agnanteró',
				'Kardítsa',
				'Mouzáki',
				'Sofádes',
			]));
			expect(lefkadaCities).toEqual(expect.arrayContaining([
				'Agriá',
				'Skiáthos',
				'Volos',
				'Áno Lekhónia',
			]));
		});

		test('Check active bug cities for Spain', () => {
			expect(City.getCitiesOfState('ES', 'BI')).toHaveLength(112);
			expect(City.getCitiesOfState('ES', 'LE').length).toBeGreaterThan(0);
			expect(City.getCitiesOfState('ES', 'AS').map((city: ICity) => city.name)).toEqual(
				expect.arrayContaining(['Allande', 'Oviedo', 'Yernes y Tameza'])
			);
			expect(City.getCitiesOfState('ES', 'CB').map((city: ICity) => city.name)).toContain('Santander');
			expect(City.getCitiesOfState('ES', 'MD').map((city: ICity) => city.name)).toContain('Madrid');
			expect(City.getCitiesOfState('ES', 'MC').map((city: ICity) => city.name)).toContain('Murcia');
			expect(City.getCitiesOfState('ES', 'NC').map((city: ICity) => city.name)).toContain('Pamplona');
			expect(City.getCitiesOfState('ES', 'VC').map((city: ICity) => city.name)).toContain('Valencia');
			expect(City.getCitiesOfState('ES', 'AN').map((city: ICity) => city.name)).toEqual(['Andalusia']);
			expect(City.getCitiesOfState('ES', 'AR').map((city: ICity) => city.name)).toEqual(['Aragon']);
			expect(City.getCitiesOfState('ES', 'CL').map((city: ICity) => city.name)).toEqual(['Castile and Leon']);
			expect(City.getCitiesOfState('ES', 'CE').map((city: ICity) => city.name)).toEqual(['Benzú', 'Ceuta']);
			expect(City.getCitiesOfState('ES', 'ML').map((city: ICity) => city.name)).toEqual(['Melilla']);
		});
	});
};
export default executeAllTests;
executeAllTests(City);
