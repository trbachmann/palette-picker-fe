import { fetchData, createOptions } from './fetch';
import * as mockData from '../mockData';

describe('Utils', () => {
  describe('fetchData', () => {
    const mockPath = '/projects';

    it('should return projects if status is less than 300 and not 204', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: jest.fn(() => Promise.resolve(mockData.mockProjects)),
        status: 200
      }));
      const result = await fetchData(mockPath);
      expect(result).toEqual(mockData.mockProjects);
    });

    it('should return the status if it is 204', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 204
      }));
      const expected = 204;
      const result = await fetchData(mockPath);
      expect(result).toEqual(expected);
    });

    it('should throw an error if status is >= 300', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: jest.fn(() => Promise.resolve('Error fetching projects')),
        status: 500
      }));
      const expected = new Error('Error fetching projects');
      await expect(fetchData(mockPath)).rejects.toEqual(expected);
    });
  });

  describe('createOptions', () => {
    it('should return an object with method, body and headers', () => {
      const mockMethod = 'POST';
      const mockData = { name: 'Awesome Project' };
      const expected = {
        method: mockMethod,
        body: JSON.stringify(mockData),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const result = createOptions(mockMethod, mockData);
      expect(result).toEqual(expected);
    });
  });
});