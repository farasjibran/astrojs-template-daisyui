import { axiosClient } from "../utils/axiosClient";

import {
  type GetCourseByIdResponse,
  type GetCourseRequest,
  type GetCourseResponse,
  type GetCouseByIdRequest,
} from "../../../types/course";

export const getCourse = async (parameters: GetCourseRequest) => {
  const course = await axiosClient.get<GetCourseResponse>(`/public/pelatihan`, {
    params: parameters,
  });

  return course.data.data;
};

export const getCourseById = async ({ id }: GetCouseByIdRequest) => {
  const course = await axiosClient.get<GetCourseByIdResponse>(
    `/public/pelatihan/${id}`
  );

  return course.data.data;
};
