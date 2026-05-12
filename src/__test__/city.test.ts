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
				'Argostólion',
				'Itháki',
				'Lixoúri',
				'Póros',
				'Sámi',
				'Valsamáta',
			]));
			expect(lefkadaCities).toContain('Lefkada');
		});

		test('Check active bug cities for Spain', () => {
			expect(City.getCitiesOfState('ES', 'BI')).toHaveLength(112);
			expect(City.getCitiesOfState('ES', 'LE').length).toBeGreaterThan(0);
		});
	});
};
export default executeAllTests;
executeAllTests(City);
