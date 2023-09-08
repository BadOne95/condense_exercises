import { PrismaClient } from "@prisma/client";

type orderType = "weight" | "name";

export const getAllShoesFromCategory = async (
  client: PrismaClient,
  params: {
    categoryId: number;
    order?: orderType;
    skip?: number;
    filters?: {
      name?: string;
      material?: string;
      color?: string;
      size?: string;
    };
  }
) => {
  const { categoryId, order, skip, filters } = params;
  const category = await client.categories.findUnique({
    where: { id: categoryId },
  });

  const newPath = `${category.path}${category.id}-`;
  const filtersArray: Record<string, object>[] = [
    { path: { startsWith: newPath } },
  ];
  if ("name" in (filters || {})) {
    filtersArray.push({ shoe: { model: { name: filters.name } } });
  }
  if ("material" in (filters || {})) {
    filtersArray.push({ shoe: { model: { material: filters.material } } });
  }
  if ("color" in (filters || {})) {
    filtersArray.push({ shoe: { color: filters.color } });
  }
  if ("size" in (filters || {})) {
    filtersArray.push({ shoe: { size: filters.size } });
  }

  return client.shoesToCategories.findMany({
    where: {
      AND: filtersArray,
    },
    distinct: ["shoeId"],
    include: { shoe: { include: { model: true } } },
    take: 25,
    skip: (skip || 0) * 25,
    orderBy: (order === "name" && { weight: "asc" }) || {
      shoe: { model: { name: "asc" } },
    },
  });
};

export const getFirstLevelCategories = async (
  client: PrismaClient,
  params: {
    categoryId: number;
    order?: orderType;
    skip?: number;
  }
) => {
  const { categoryId, order, skip } = params;
  const category = await client.categories.findUnique({
    where: { id: categoryId },
  });
  const newPath = `${category.path}${category.id}-`;
  return client.shoesToCategories.findMany({
    where: { path: newPath },
    orderBy: (order === "name" && { weight: "asc" }) || {
      shoe: { model: { name: "asc" } },
    },
    take: 25,
    skip: (skip || 0) * 25,
  });
};
