export interface IformObject {
  name: string;
  email: string;
  password: number;
}

export interface IuseAsyncSubmit {
  asyncSubmit: () => Promise<void>;
  status: "idle" | "pending" | "success" | "error";
  apiResponse: any | null;
  apiError: any | null;
}

export interface IuseForm {
  initialState: IformObject;
  onSubmit: () => void;
}
