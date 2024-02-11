import type { CodegenProject, ProjectsCodegenConfig } from './types';

export const createProjectConfig = <TProject extends string>(
  config: CodegenProject<TProject>
): ProjectsCodegenConfig<TProject> => ({ projects: config });
