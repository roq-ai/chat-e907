import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { contactListValidationSchema } from 'validationSchema/contact-lists';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.contact_list
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getContactListById();
    case 'PUT':
      return updateContactListById();
    case 'DELETE':
      return deleteContactListById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getContactListById() {
    const data = await prisma.contact_list.findFirst(convertQueryToPrismaUtil(req.query, 'contact_list'));
    return res.status(200).json(data);
  }

  async function updateContactListById() {
    await contactListValidationSchema.validate(req.body);
    const data = await prisma.contact_list.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteContactListById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.contact_list.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
