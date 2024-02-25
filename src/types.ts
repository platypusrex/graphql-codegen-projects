import type { CodegenConfig } from '@graphql-codegen/cli';
import type { IGraphQLProject, IGraphQLProjects } from 'graphql-config';

export type ProjectCodegenConfig = IGraphQLProject & {
  extensions: IGraphQLProject['extensions'] & {
    codegen: CodegenConfig;
  };
};

export type CodegenProject<TProject extends string> = IGraphQLProjects['projects'] & {
  [K in TProject]: ProjectCodegenConfig;
};

export type ProjectsCodegenConfig<TProject extends string> = IGraphQLProjects & {
  projects: CodegenProject<TProject>;
};

export declare const createProjectConfig: <TProject extends string>(
  config: CodegenProject<TProject>
) => ProjectsCodegenConfig<TProject>;

