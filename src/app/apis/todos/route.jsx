// pages/api/todos/[id].js
import prisma from '@/db';

import { NextRequest, NextResponse } from 'next/server';


export async function DELETE(req) {
  console.log('req.query:', req.nextUrl.searchParams.get('id'));
  const todoId = req.nextUrl.searchParams.get('id');

  if (req.method === 'DELETE') {
    try {
      const task = await prisma.todo.findUnique({ where: { id: todoId } });
      if (!task) {
       return  NextResponse.json({ success: false , error: 'Not Found' },{ status: 411 });
      
      }
      else {
        await prisma.todo.delete({where: { id: todoId }});
        return  NextResponse.json({ success: true  , error : 'noerror' , task : task} , { status: 200 });
      }
     
    } catch (error) {
      console.error('Error deleting todo:', error);
      return  NextResponse.json({ success : false ,  error: 'Internal Server Error'+ error }, { status: 500 });
    }
  } else {
    return  NextResponse.json({success: false , error: 'Method Not Allowed' } , { status: 405 });
  }
}
