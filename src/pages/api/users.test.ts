// import { server } from '../../../server';
// import getServerSideProps from './users';
// import type { NextApiRequest, NextApiResponse } from 'next';

// describe('/api/users', () => {
//   it('filters users correctly', async () => {
//     let resData;
//     const req = {} as NextApiRequest;
//     const res = {
//       status: jest.fn(() => res),
//       json: jest.fn(data => (resData = data)),
//     } as unknown as NextApiResponse;
//     await getServerSideProps(res);
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(resData).toEqual([
//       { id: 1, first_name: 'George', last_name: 'Bluth' },
//     ]);
//   });
// });
