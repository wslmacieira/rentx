import { ICreateDTO } from "../dtos/ICreateCarDTO";

interface ICarsRepository {
  create(data: ICreateDTO): Promise<void>;
}

export { ICarsRepository };
