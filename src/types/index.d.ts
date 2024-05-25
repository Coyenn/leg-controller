export interface LegControllerOptions {
  ikEnabled: boolean;
  ikExclude: Instance[];
  maxIkVelocity: number;
  onStates: Enum.HumanoidStateType[];
  activationVelocity: number;
  maxRootAngle: number;
  maxAngle: number;
  interploationSpeed: {
    highVelocityPoint: number;
    Speed: number;
  };
}

export class LegController {
  constructor(character: Model, options?: LegControllerOptions);

  public Destroy(): void;
}
