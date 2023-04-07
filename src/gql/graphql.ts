/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any;
};

export type AccountFacultyNot = {
  __typename?: 'AccountFacultyNot';
  code: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  schoolId: Scalars['String'];
};

export type AccountImage = {
  __typename?: 'AccountImage';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  schoolId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountNotFinishMiniTestDto = {
  __typename?: 'AccountNotFinishMiniTestDto';
  fullName: Scalars['String'];
  id: Scalars['String'];
  school: AccountSchoolNot;
  schoolFaculty: AccountFacultyNot;
  schoolYear: AccountYearNot;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum AccountOrderByRelevanceFieldEnum {
  ClassId = 'classId',
  Email = 'email',
  FullName = 'fullName',
  Id = 'id',
  IdentityNumber = 'identityNumber',
  Password = 'password',
  PasswordHash = 'passwordHash',
  RefreshToken = 'refreshToken',
  SchoolFacultyId = 'schoolFacultyId',
  SchoolId = 'schoolId',
  SchoolYearId = 'schoolYearId',
}

export type AccountOrderByRelevanceInput = {
  fields: Array<AccountOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type AccountOrderByWithRelationAndSearchRelevanceInput = {
  AiTest?: InputMaybe<AiTestOrderByRelationAggregateInput>;
  Image?: InputMaybe<ImageOrderByRelationAggregateInput>;
  MiniTest?: InputMaybe<MiniTestOrderByRelationAggregateInput>;
  NationalTest?: InputMaybe<NationalTestOrderByRelationAggregateInput>;
  SelfTrial?: InputMaybe<SelfTrialOrderByRelationAggregateInput>;
  SelfTrialQuestionStudent?: InputMaybe<SelfTrialQuestionStudentOrderByRelationAggregateInput>;
  SendMiniTest?: InputMaybe<SendMiniTestOrderByRelationAggregateInput>;
  SendNationalTest?: InputMaybe<SendNationalTestOrderByRelationAggregateInput>;
  StudentQuestion?: InputMaybe<StudentQuestionOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<AccountOrderByRelevanceInput>;
  class?: InputMaybe<ClassOrderByWithRelationAndSearchRelevanceInput>;
  classId?: InputMaybe<SortOrder>;
  code?: InputMaybe<CodeOrderByWithRelationAndSearchRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  firstLogin?: InputMaybe<SortOrder>;
  formTest?: InputMaybe<FormTestOrderByRelationAggregateInput>;
  fullName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identityNumber?: InputMaybe<SortOrder>;
  isStatistical?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  question?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  refreshToken?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  school?: InputMaybe<SchoolOrderByWithRelationAndSearchRelevanceInput>;
  schoolFaculty?: InputMaybe<SchoolFacultyOrderByWithRelationAndSearchRelevanceInput>;
  schoolFacultyId?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
  schoolYear?: InputMaybe<SchoolYearOrderByWithRelationAndSearchRelevanceInput>;
  schoolYearId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  studentSubject?: InputMaybe<StudentSubjectOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AccountRelationFilter = {
  is?: InputMaybe<AccountWhereInput>;
  isNot?: InputMaybe<AccountWhereInput>;
};

export enum AccountScalarFieldEnum {
  ClassId = 'classId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  ExpiredAt = 'expiredAt',
  FirstLogin = 'firstLogin',
  FullName = 'fullName',
  Id = 'id',
  IdentityNumber = 'identityNumber',
  IsStatistical = 'isStatistical',
  Level = 'level',
  Password = 'password',
  PasswordHash = 'passwordHash',
  RefreshToken = 'refreshToken',
  Role = 'role',
  SchoolFacultyId = 'schoolFacultyId',
  SchoolId = 'schoolId',
  SchoolYearId = 'schoolYearId',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type AccountSchoolNot = {
  __typename?: 'AccountSchoolNot';
  code: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  AiTest?: InputMaybe<AiTestListRelationFilter>;
  Image?: InputMaybe<ImageListRelationFilter>;
  MiniTest?: InputMaybe<MiniTestListRelationFilter>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  NationalTest?: InputMaybe<NationalTestListRelationFilter>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  SelfTrial?: InputMaybe<SelfTrialListRelationFilter>;
  SelfTrialQuestionStudent?: InputMaybe<SelfTrialQuestionStudentListRelationFilter>;
  SendMiniTest?: InputMaybe<SendMiniTestListRelationFilter>;
  SendNationalTest?: InputMaybe<SendNationalTestListRelationFilter>;
  StudentQuestion?: InputMaybe<StudentQuestionListRelationFilter>;
  class?: InputMaybe<ClassRelationFilter>;
  classId?: InputMaybe<StringNullableFilter>;
  code?: InputMaybe<CodeRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  expiredAt?: InputMaybe<DateTimeNullableFilter>;
  firstLogin?: InputMaybe<BoolFilter>;
  formTest?: InputMaybe<FormTestListRelationFilter>;
  fullName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  identityNumber?: InputMaybe<StringNullableFilter>;
  isStatistical?: InputMaybe<BoolNullableFilter>;
  level?: InputMaybe<IntNullableFilter>;
  password?: InputMaybe<StringFilter>;
  passwordHash?: InputMaybe<StringFilter>;
  question?: InputMaybe<QuestionListRelationFilter>;
  refreshToken?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleNullableFilter>;
  school?: InputMaybe<SchoolRelationFilter>;
  schoolFaculty?: InputMaybe<SchoolFacultyRelationFilter>;
  schoolFacultyId?: InputMaybe<StringNullableFilter>;
  schoolId?: InputMaybe<StringNullableFilter>;
  schoolYear?: InputMaybe<SchoolYearRelationFilter>;
  schoolYearId?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumStatusNullableFilter>;
  studentSubject?: InputMaybe<StudentSubjectListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AccountWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  identityNumber?: InputMaybe<Scalars['String']>;
};

export type AccountYearNot = {
  __typename?: 'AccountYearNot';
  id: Scalars['String'];
  schoolFacultyId: Scalars['String'];
  schoolId: Scalars['String'];
  year: Scalars['String'];
};

export type AdminStatisticByClassDto = {
  __typename?: 'AdminStatisticByClassDto';
  statistic: Array<Statistic>;
  total: Scalars['Int'];
};

export type AiQuestion = {
  __typename?: 'AiQuestion';
  aiTestId: Scalars['Int'];
  questions: Array<Question>;
};

export type AiTestAnswerListRelationFilter = {
  every?: InputMaybe<AiTestAnswerWhereInput>;
  none?: InputMaybe<AiTestAnswerWhereInput>;
  some?: InputMaybe<AiTestAnswerWhereInput>;
};

export type AiTestAnswerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AiTestAnswerWhereInput = {
  AND?: InputMaybe<Array<AiTestAnswerWhereInput>>;
  NOT?: InputMaybe<Array<AiTestAnswerWhereInput>>;
  OR?: InputMaybe<Array<AiTestAnswerWhereInput>>;
  aiTest?: InputMaybe<AiTestRelationFilter>;
  aiTestId?: InputMaybe<IntFilter>;
  answer?: InputMaybe<AnswerRelationFilter>;
  answerId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  isCorrect?: InputMaybe<BoolFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringFilter>;
};

export type AiTestListRelationFilter = {
  every?: InputMaybe<AiTestWhereInput>;
  none?: InputMaybe<AiTestWhereInput>;
  some?: InputMaybe<AiTestWhereInput>;
};

export type AiTestModel = {
  __typename?: 'AiTestModel';
  createdAt: Scalars['DateTime'];
  point: Scalars['Int'];
  section: SectionName;
  totalPoint: Scalars['Int'];
};

export type AiTestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AiTestQuestionListRelationFilter = {
  every?: InputMaybe<AiTestQuestionWhereInput>;
  none?: InputMaybe<AiTestQuestionWhereInput>;
  some?: InputMaybe<AiTestQuestionWhereInput>;
};

export type AiTestQuestionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AiTestQuestionWhereInput = {
  AND?: InputMaybe<Array<AiTestQuestionWhereInput>>;
  NOT?: InputMaybe<Array<AiTestQuestionWhereInput>>;
  OR?: InputMaybe<Array<AiTestQuestionWhereInput>>;
  aiTest?: InputMaybe<AiTestRelationFilter>;
  aiTestId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringFilter>;
};

export type AiTestRelationFilter = {
  is?: InputMaybe<AiTestWhereInput>;
  isNot?: InputMaybe<AiTestWhereInput>;
};

export type AiTestWhereInput = {
  AND?: InputMaybe<Array<AiTestWhereInput>>;
  NOT?: InputMaybe<Array<AiTestWhereInput>>;
  OR?: InputMaybe<Array<AiTestWhereInput>>;
  account?: InputMaybe<AccountRelationFilter>;
  accountId?: InputMaybe<StringFilter>;
  aiTestAnswer?: InputMaybe<AiTestAnswerListRelationFilter>;
  aiTestQuestion?: InputMaybe<AiTestQuestionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  finished?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  point?: InputMaybe<IntFilter>;
  type?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AllCategoriesModel = {
  __typename?: 'AllCategoriesModel';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type AllChaptersModel = {
  __typename?: 'AllChaptersModel';
  category: Array<AllCategoriesModel>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type AllSubjectsModel = {
  __typename?: 'AllSubjectsModel';
  chapter: Array<AllChaptersModel>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Answer = {
  __typename?: 'Answer';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  explainImageOrVideo?: Maybe<Scalars['String']>;
  explainText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isCorrect: Scalars['Boolean'];
  questionId?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type AnswerInput = {
  answerId: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  questionId: Scalars['String'];
};

export type AnswerListRelationFilter = {
  every?: InputMaybe<AnswerWhereInput>;
  none?: InputMaybe<AnswerWhereInput>;
  some?: InputMaybe<AnswerWhereInput>;
};

export type AnswerMiniTest = {
  __typename?: 'AnswerMiniTest';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  explainImageOrVideo?: Maybe<Scalars['String']>;
  explainText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isCorrect: Scalars['Boolean'];
  questionId?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type AnswerMiniTestInput = {
  answerId: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  questionId: Scalars['String'];
};

export type AnswerNationalTest = {
  __typename?: 'AnswerNationalTest';
  explainImageOrVideo?: Maybe<Scalars['String']>;
  explainText?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type AnswerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AnswerRelationFilter = {
  is?: InputMaybe<AnswerWhereInput>;
  isNot?: InputMaybe<AnswerWhereInput>;
};

export type AnswerStatistic = {
  __typename?: 'AnswerStatistic';
  pointAverage: Scalars['Float'];
  totalQuestion: Scalars['Int'];
  totalStudent: Scalars['Int'];
  totalSubmission: Scalars['Int'];
};

export type AnswerWhereInput = {
  AND?: InputMaybe<Array<AnswerWhereInput>>;
  AiTestAnswer?: InputMaybe<AiTestAnswerListRelationFilter>;
  MiniTestAnswer?: InputMaybe<MiniTestAnswerListRelationFilter>;
  NOT?: InputMaybe<Array<AnswerWhereInput>>;
  NationalTestAnswer?: InputMaybe<NationalTestAnswerListRelationFilter>;
  OR?: InputMaybe<Array<AnswerWhereInput>>;
  SelfTrialAnswer?: InputMaybe<SelfTrialAnswerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  explainImageOrVideo?: InputMaybe<StringNullableFilter>;
  explainText?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isCorrect?: InputMaybe<BoolFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringNullableFilter>;
  text?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AtTestPaginationModel = {
  __typename?: 'AtTestPaginationModel';
  aiTests: Array<AiTestModel>;
  total: Scalars['Int'];
};

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['JWT'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT'];
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CategoryOrderByRelevanceFieldEnum {
  ChapterId = 'chapterId',
  Id = 'id',
  Name = 'name',
}

export type CategoryOrderByRelevanceInput = {
  fields: Array<CategoryOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type CategoryOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<CategoryOrderByRelevanceInput>;
  chapter?: InputMaybe<ChapterOrderByWithRelationAndSearchRelevanceInput>;
  chapterId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  question?: InputMaybe<QuestionOrderByRelationAggregateInput>;
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  chapter?: InputMaybe<ChapterRelationFilter>;
  chapterId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  question?: InputMaybe<QuestionListRelationFilter>;
};

export type ChangePasswordAdmin = {
  oldPassword: Scalars['String'];
  password: Scalars['String'];
};

export type ChangePasswordByAdminInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type ChangePasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Chapter = {
  __typename?: 'Chapter';
  category?: Maybe<Array<Category>>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ChapterListRelationFilter = {
  every?: InputMaybe<ChapterWhereInput>;
  none?: InputMaybe<ChapterWhereInput>;
  some?: InputMaybe<ChapterWhereInput>;
};

export type ChapterOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ChapterOrderByRelevanceFieldEnum {
  Id = 'id',
  Name = 'name',
  SubjectId = 'subjectId',
}

export type ChapterOrderByRelevanceInput = {
  fields: Array<ChapterOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type ChapterOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<ChapterOrderByRelevanceInput>;
  category?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  question?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  subject?: InputMaybe<SubjectOrderByWithRelationAndSearchRelevanceInput>;
  subjectId?: InputMaybe<SortOrder>;
};

export type ChapterRelationFilter = {
  is?: InputMaybe<ChapterWhereInput>;
  isNot?: InputMaybe<ChapterWhereInput>;
};

export type ChapterWhereInput = {
  AND?: InputMaybe<Array<ChapterWhereInput>>;
  NOT?: InputMaybe<Array<ChapterWhereInput>>;
  OR?: InputMaybe<Array<ChapterWhereInput>>;
  category?: InputMaybe<CategoryListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  question?: InputMaybe<QuestionListRelationFilter>;
  subject?: InputMaybe<SubjectRelationFilter>;
  subjectId?: InputMaybe<StringNullableFilter>;
};

export type Class = {
  __typename?: 'Class';
  account?: Maybe<Array<User>>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  schoolYear?: Maybe<SchoolYear>;
  updatedAt: Scalars['DateTime'];
};

export type ClassListRelationFilter = {
  every?: InputMaybe<ClassWhereInput>;
  none?: InputMaybe<ClassWhereInput>;
  some?: InputMaybe<ClassWhereInput>;
};

export type ClassNotFinishMiniTestDto = {
  __typename?: 'ClassNotFinishMiniTestDto';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ClassOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ClassOrderByRelevanceFieldEnum {
  Id = 'id',
  Name = 'name',
  SchoolId = 'schoolId',
  SchoolYearId = 'schoolYearId',
}

export type ClassOrderByRelevanceInput = {
  fields: Array<ClassOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type ClassOrderByWithRelationAndSearchRelevanceInput = {
  MiniTest?: InputMaybe<MiniTestOrderByRelationAggregateInput>;
  MiniTestClass?: InputMaybe<MiniTestClassOrderByRelationAggregateInput>;
  NationalTest?: InputMaybe<NationalTestOrderByRelationAggregateInput>;
  SendNationalTestClass?: InputMaybe<SendNationalTestClassOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<ClassOrderByRelevanceInput>;
  account?: InputMaybe<AccountOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  school?: InputMaybe<SchoolOrderByWithRelationAndSearchRelevanceInput>;
  schoolId?: InputMaybe<SortOrder>;
  schoolYear?: InputMaybe<SchoolYearOrderByWithRelationAndSearchRelevanceInput>;
  schoolYearId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClassRelationFilter = {
  is?: InputMaybe<ClassWhereInput>;
  isNot?: InputMaybe<ClassWhereInput>;
};

export enum ClassScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  SchoolId = 'schoolId',
  SchoolYearId = 'schoolYearId',
  UpdatedAt = 'updatedAt',
}

export type ClassWhereInput = {
  AND?: InputMaybe<Array<ClassWhereInput>>;
  MiniTest?: InputMaybe<MiniTestListRelationFilter>;
  MiniTestClass?: InputMaybe<MiniTestClassListRelationFilter>;
  NOT?: InputMaybe<Array<ClassWhereInput>>;
  NationalTest?: InputMaybe<NationalTestListRelationFilter>;
  OR?: InputMaybe<Array<ClassWhereInput>>;
  SendNationalTestClass?: InputMaybe<SendNationalTestClassListRelationFilter>;
  account?: InputMaybe<AccountListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  school?: InputMaybe<SchoolRelationFilter>;
  schoolId?: InputMaybe<StringNullableFilter>;
  schoolYear?: InputMaybe<SchoolYearRelationFilter>;
  schoolYearId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClassWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum CodeOrderByRelevanceFieldEnum {
  AccountId = 'accountId',
  Code = 'code',
  Id = 'id',
}

export type CodeOrderByRelevanceInput = {
  fields: Array<CodeOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type CodeOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<CodeOrderByRelevanceInput>;
  account?: InputMaybe<AccountOrderByWithRelationAndSearchRelevanceInput>;
  accountId?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CodeRelationFilter = {
  is?: InputMaybe<CodeWhereInput>;
  isNot?: InputMaybe<CodeWhereInput>;
};

export type CodeWhereInput = {
  AND?: InputMaybe<Array<CodeWhereInput>>;
  NOT?: InputMaybe<Array<CodeWhereInput>>;
  OR?: InputMaybe<Array<CodeWhereInput>>;
  account?: InputMaybe<AccountRelationFilter>;
  accountId?: InputMaybe<StringFilter>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ContinueNationalTestInput = {
  nationalTestId: Scalars['Int'];
};

export type CreateAdminInput = {
  email: Scalars['String'];
  fullName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: UserRole;
  schoolId?: InputMaybe<Scalars['String']>;
};

export type CreateAnswerInput = {
  explainImageOrVideo?: InputMaybe<Scalars['String']>;
  explainText?: InputMaybe<Scalars['String']>;
  isCorrect?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
};

export type CreateCategoryInput = {
  chaperId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  subjectId?: InputMaybe<Scalars['String']>;
};

export type CreateClassInput = {
  accountId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  schoolFacultyId: Scalars['String'];
  schoolId: Scalars['String'];
  schoolYearId: Scalars['String'];
};

export type CreateManyAnswerInput = {
  create: Array<CreateAnswerInput>;
};

export type CreateMiniTestInput = {
  name: Scalars['String'];
  questionId?: InputMaybe<Array<Scalars['String']>>;
  sectionId: Scalars['String'];
  semester?: InputMaybe<FormTestSemester>;
  time?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['String']>;
};

export type CreateNationalTestInput = {
  name: Scalars['String'];
  questionIds: Array<Scalars['String']>;
};

export type CreatePostInput = {
  title: Scalars['String'];
};

export type CreateQuestionInput = {
  answers?: InputMaybe<CreateManyAnswerInput>;
  categoryId: Scalars['String'];
  chapterId: Scalars['String'];
  description: Scalars['String'];
  file?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  identityNumber?: InputMaybe<Scalars['String']>;
  level: Scalars['Int'];
  public?: InputMaybe<QuestionPublic>;
  subjectId: Scalars['String'];
  title: Scalars['String'];
  type?: InputMaybe<QuestionType>;
};

export type CreateSchoolInput = {
  abbreviations?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateSchoolYearInput = {
  schoolFacultyId: Scalars['String'];
  schoolId: Scalars['String'];
  year: Scalars['String'];
};

export type CreateStudentInput = {
  classId: Scalars['String'];
  email: Scalars['String'];
  fullName?: InputMaybe<Scalars['String']>;
  identityNumber: Scalars['String'];
  isStatistical?: InputMaybe<Scalars['Boolean']>;
  schoolFacultyId: Scalars['String'];
  schoolId: Scalars['String'];
  schoolYearId: Scalars['String'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DeleteNationalTestInput = {
  /** Id */
  id: Scalars['String'];
};

export type DeleteSendNationalTestInput = {
  /** Id */
  id: Scalars['Int'];
};

export type EndSendNationalTestInput = {
  /** Id */
  id: Scalars['Int'];
};

export type EnumPoemFilter = {
  equals?: InputMaybe<Poem>;
  in?: InputMaybe<Array<Poem>>;
  not?: InputMaybe<NestedEnumPoemFilter>;
  notIn?: InputMaybe<Array<Poem>>;
};

export type EnumPublicFilter = {
  equals?: InputMaybe<Public>;
  in?: InputMaybe<Array<Public>>;
  not?: InputMaybe<NestedEnumPublicFilter>;
  notIn?: InputMaybe<Array<Public>>;
};

export type EnumRoleNullableFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumSemesterNullableFilter = {
  equals?: InputMaybe<Semester>;
  in?: InputMaybe<Array<Semester>>;
  not?: InputMaybe<NestedEnumSemesterNullableFilter>;
  notIn?: InputMaybe<Array<Semester>>;
};

export type EnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type EnumStatusNullableFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusNullableFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type EnumTypeFilter = {
  equals?: InputMaybe<Type>;
  in?: InputMaybe<Array<Type>>;
  not?: InputMaybe<NestedEnumTypeFilter>;
  notIn?: InputMaybe<Array<Type>>;
};

export type FilterSchoolYearInput = {
  schoolFacultyIds?: InputMaybe<Array<Scalars['String']>>;
  schoolId: Scalars['String'];
};

export type FindSendNationalTestInput = {
  classId?: InputMaybe<Scalars['String']>;
  schoolFacultyId?: InputMaybe<Scalars['String']>;
  schoolId?: InputMaybe<Scalars['String']>;
  schoolYearId?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type FormTest = {
  __typename?: 'FormTest';
  account?: Maybe<User>;
  accountId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  formTestQuestion?: Maybe<Array<FormTestQuestion>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  poem: FormTestPoem;
  school?: Maybe<School>;
  schoolId?: Maybe<Scalars['String']>;
  section?: Maybe<Section>;
  sectionId?: Maybe<Scalars['String']>;
  semester: FormTestSemester;
  status: Status;
  updatedAt: Scalars['DateTime'];
};

export type FormTestListRelationFilter = {
  every?: InputMaybe<FormTestWhereInput>;
  none?: InputMaybe<FormTestWhereInput>;
  some?: InputMaybe<FormTestWhereInput>;
};

export type FormTestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum FormTestOrderByRelevanceFieldEnum {
  AccountId = 'accountId',
  Id = 'id',
  Name = 'name',
  SchoolId = 'schoolId',
  SectionId = 'sectionId',
  Year = 'year',
}

export type FormTestOrderByRelevanceInput = {
  fields: Array<FormTestOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type FormTestOrderByWithRelationAndSearchRelevanceInput = {
  MiniTest?: InputMaybe<MiniTestOrderByRelationAggregateInput>;
  NationalTest?: InputMaybe<NationalTestOrderByRelationAggregateInput>;
  SendMiniTest?: InputMaybe<SendMiniTestOrderByRelationAggregateInput>;
  SendNationalTest?: InputMaybe<SendNationalTestOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<FormTestOrderByRelevanceInput>;
  account?: InputMaybe<AccountOrderByWithRelationAndSearchRelevanceInput>;
  accountId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  formTestQuestion?: InputMaybe<FormTestQuestionOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  poem?: InputMaybe<SortOrder>;
  school?: InputMaybe<SchoolOrderByWithRelationAndSearchRelevanceInput>;
  schoolId?: InputMaybe<SortOrder>;
  section?: InputMaybe<SectionOrderByWithRelationAndSearchRelevanceInput>;
  sectionId?: InputMaybe<SortOrder>;
  semester?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
};

/** FormTest Poem */
export enum FormTestPoem {
  MiniTest = 'MINI_TEST',
  NationalTrial = 'NATIONAL_TRIAL',
}

export type FormTestQuestion = {
  __typename?: 'FormTestQuestion';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  formTest?: Maybe<FormTest>;
  formTestId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  question?: Maybe<Question>;
  questionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type FormTestQuestionListRelationFilter = {
  every?: InputMaybe<FormTestQuestionWhereInput>;
  none?: InputMaybe<FormTestQuestionWhereInput>;
  some?: InputMaybe<FormTestQuestionWhereInput>;
};

export type FormTestQuestionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FormTestQuestionWhereInput = {
  AND?: InputMaybe<Array<FormTestQuestionWhereInput>>;
  NOT?: InputMaybe<Array<FormTestQuestionWhereInput>>;
  OR?: InputMaybe<Array<FormTestQuestionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  formTest?: InputMaybe<FormTestRelationFilter>;
  formTestId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FormTestRelationFilter = {
  is?: InputMaybe<FormTestWhereInput>;
  isNot?: InputMaybe<FormTestWhereInput>;
};

export enum FormTestScalarFieldEnum {
  AccountId = 'accountId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  Poem = 'poem',
  SchoolId = 'schoolId',
  SectionId = 'sectionId',
  Semester = 'semester',
  Status = 'status',
  Time = 'time',
  UpdatedAt = 'updatedAt',
  Year = 'year',
}

/** FormTest Semester */
export enum FormTestSemester {
  One = 'ONE',
  Two = 'TWO',
}

export type FormTestWhereInput = {
  AND?: InputMaybe<Array<FormTestWhereInput>>;
  MiniTest?: InputMaybe<MiniTestListRelationFilter>;
  NOT?: InputMaybe<Array<FormTestWhereInput>>;
  NationalTest?: InputMaybe<NationalTestListRelationFilter>;
  OR?: InputMaybe<Array<FormTestWhereInput>>;
  SendMiniTest?: InputMaybe<SendMiniTestListRelationFilter>;
  SendNationalTest?: InputMaybe<SendNationalTestListRelationFilter>;
  account?: InputMaybe<AccountRelationFilter>;
  accountId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  formTestQuestion?: InputMaybe<FormTestQuestionListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  poem?: InputMaybe<EnumPoemFilter>;
  school?: InputMaybe<SchoolRelationFilter>;
  schoolId?: InputMaybe<StringNullableFilter>;
  section?: InputMaybe<SectionRelationFilter>;
  sectionId?: InputMaybe<StringNullableFilter>;
  semester?: InputMaybe<EnumSemesterNullableFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  time?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  year?: InputMaybe<StringNullableFilter>;
};

export type FormTestWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FromTestS = {
  __typename?: 'FromTestS';
  name: Scalars['String'];
};

export type GetSendMiniTestResult = {
  __typename?: 'GetSendMiniTestResult';
  data: Array<SendMiniTest>;
  total: Scalars['Int'];
};

export type GetSendNationalTestInput = {
  nationalTestId?: InputMaybe<Scalars['Int']>;
};

export type Image = {
  __typename?: 'Image';
  account?: Maybe<AccountImage>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  question?: Maybe<QuestionImage>;
  questionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type ImageCreateManyInput = {
  accountId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  questionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageListRelationFilter = {
  every?: InputMaybe<ImageWhereInput>;
  none?: InputMaybe<ImageWhereInput>;
  some?: InputMaybe<ImageWhereInput>;
};

export type ImageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ImageOrderByRelevanceFieldEnum {
  AccountId = 'accountId',
  Name = 'name',
  QuestionId = 'questionId',
  Url = 'url',
}

export type ImageOrderByRelevanceInput = {
  fields: Array<ImageOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type ImageOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<ImageOrderByRelevanceInput>;
  account?: InputMaybe<AccountOrderByWithRelationAndSearchRelevanceInput>;
  accountId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  question?: InputMaybe<QuestionOrderByWithRelationAndSearchRelevanceInput>;
  questionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export enum ImageScalarFieldEnum {
  AccountId = 'accountId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  QuestionId = 'questionId',
  UpdatedAt = 'updatedAt',
  Url = 'url',
}

export type ImageWhereInput = {
  AND?: InputMaybe<Array<ImageWhereInput>>;
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  OR?: InputMaybe<Array<ImageWhereInput>>;
  account?: InputMaybe<AccountRelationFilter>;
  accountId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringFilter>;
};

export type ImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type LearningAnalysisIndividual = {
  __typename?: 'LearningAnalysisIndividual';
  students: Array<StudentIndividualAnalysis>;
  total: Scalars['Int'];
};

export type LearningAnalysisSchool = {
  __typename?: 'LearningAnalysisSchool';
  students: Array<StudentSchoolAnalysis>;
  total: Scalars['Int'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  loggedOut: Scalars['Boolean'];
};

export type MiniTestAnswerListRelationFilter = {
  every?: InputMaybe<MiniTestAnswerWhereInput>;
  none?: InputMaybe<MiniTestAnswerWhereInput>;
  some?: InputMaybe<MiniTestAnswerWhereInput>;
};

export type MiniTestAnswerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MiniTestAnswerWhereInput = {
  AND?: InputMaybe<Array<MiniTestAnswerWhereInput>>;
  NOT?: InputMaybe<Array<MiniTestAnswerWhereInput>>;
  OR?: InputMaybe<Array<MiniTestAnswerWhereInput>>;
  answer?: InputMaybe<AnswerRelationFilter>;
  answerId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  isCorrect?: InputMaybe<BoolFilter>;
  miniTest?: InputMaybe<MiniTestRelationFilter>;
  miniTestId?: InputMaybe<IntFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringFilter>;
};

export type MiniTestClassFinishMiniTestDto = {
  __typename?: 'MiniTestClassFinishMiniTestDto';
  class: ClassNotFinishMiniTestDto;
};

export type MiniTestClassListRelationFilter = {
  every?: InputMaybe<MiniTestClassWhereInput>;
  none?: InputMaybe<MiniTestClassWhereInput>;
  some?: InputMaybe<MiniTestClassWhereInput>;
};

export type MiniTestClassOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MiniTestClassWhereInput = {
  AND?: InputMaybe<Array<MiniTestClassWhereInput>>;
  NOT?: InputMaybe<Array<MiniTestClassWhereInput>>;
  OR?: InputMaybe<Array<MiniTestClassWhereInput>>;
  class?: InputMaybe<ClassRelationFilter>;
  classId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  sendMiniTest?: InputMaybe<SendMiniTestRelationFilter>;
  sendMiniTestId?: InputMaybe<IntFilter>;
  totalStudent?: InputMaybe<IntFilter>;
};

export type MiniTestClasses = {
  __typename?: 'MiniTestClasses';
  class: Class;
  classId: Scalars['String'];
  sendMiniTestId: Scalars['String'];
  totalStudent: Scalars['Int'];
};

export type MiniTestFacultyFinishMiniTestDto = {
  __typename?: 'MiniTestFacultyFinishMiniTestDto';
  id: Scalars['String'];
  name: Scalars['String'];
  schoolId: Scalars['String'];
};

export type MiniTestFacultyListRelationFilter = {
  every?: InputMaybe<MiniTestFacultyWhereInput>;
  none?: InputMaybe<MiniTestFacultyWhereInput>;
  some?: InputMaybe<MiniTestFacultyWhereInput>;
};

export type MiniTestFacultyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MiniTestFacultyWhereInput = {
  AND?: InputMaybe<Array<MiniTestFacultyWhereInput>>;
  NOT?: InputMaybe<Array<MiniTestFacultyWhereInput>>;
  OR?: InputMaybe<Array<MiniTestFacultyWhereInput>>;
  SchoolFaculty?: InputMaybe<SchoolFacultyRelationFilter>;
  id?: InputMaybe<IntFilter>;
  schoolFacultyId?: InputMaybe<StringFilter>;
  sendMiniTest?: InputMaybe<SendMiniTestRelationFilter>;
  sendMiniTestId?: InputMaybe<IntFilter>;
};

export type MiniTestListRelationFilter = {
  every?: InputMaybe<MiniTestWhereInput>;
  none?: InputMaybe<MiniTestWhereInput>;
  some?: InputMaybe<MiniTestWhereInput>;
};

export type MiniTestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum MiniTestOrderByRelevanceFieldEnum {
  AccountId = 'accountId',
  ClassId = 'classId',
  FormTestId = 'formTestId',
  SectionId = 'sectionId',
}

export type MiniTestOrderByRelevanceInput = {
  fields: Array<MiniTestOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type MiniTestOrderByWithRelationAndSearchRelevanceInput = {
  MiniTestAnswer?: InputMaybe<MiniTestAnswerOrderByRelationAggregateInput>;
  SendMiniTest?: InputMaybe<SendMiniTestOrderByWithRelationAndSearchRelevanceInput>;
  _relevance?: InputMaybe<MiniTestOrderByRelevanceInput>;
  account?: InputMaybe<AccountOrderByWithRelationAndSearchRelevanceInput>;
  accountId?: InputMaybe<SortOrder>;
  class?: InputMaybe<ClassOrderByWithRelationAndSearchRelevanceInput>;
  classId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  finished?: InputMaybe<SortOrder>;
  formTest?: InputMaybe<FormTestOrderByWithRelationAndSearchRelevanceInput>;
  formTestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  point?: InputMaybe<SortOrder>;
  remainTimes?: InputMaybe<SortOrder>;
  section?: InputMaybe<SectionOrderByWithRelationAndSearchRelevanceInput>;
  sectionId?: InputMaybe<SortOrder>;
  sendMiniTestId?: InputMaybe<SortOrder>;
  totalPoint?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MiniTestQuestionDto = {
  __typename?: 'MiniTestQuestionDto';
  miniTestId: Scalars['Int'];
  questions: Array<QuestionMiniTest>;
};

export type MiniTestQuestionResult = {
  __typename?: 'MiniTestQuestionResult';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isCorrect: Scalars['Boolean'];
  question: Question;
  updatedAt: Scalars['DateTime'];
};

export type MiniTestRelationFilter = {
  is?: InputMaybe<MiniTestWhereInput>;
  isNot?: InputMaybe<MiniTestWhereInput>;
};

export enum MiniTestScalarFieldEnum {
  AccountId = 'accountId',
  ClassId = 'classId',
  CreatedAt = 'createdAt',
  Finished = 'finished',
  FormTestId = 'formTestId',
  Id = 'id',
  Point = 'point',
  RemainTimes = 'remainTimes',
  SectionId = 'sectionId',
  SendMiniTestId = 'sendMiniTestId',
  TotalPoint = 'totalPoint',
  UpdatedAt = 'updatedAt',
}

export type MiniTestSchoolFaculties = {
  __typename?: 'MiniTestSchoolFaculties';
  SchoolFaculty: SchoolFaculty;
  schoolFacultyId: Scalars['String'];
  sendMiniTestId: Scalars['String'];
};

export type MiniTestWhereInput = {
  AND?: InputMaybe<Array<MiniTestWhereInput>>;
  MiniTestAnswer?: InputMaybe<MiniTestAnswerListRelationFilter>;
  NOT?: InputMaybe<Array<MiniTestWhereInput>>;
  OR?: InputMaybe<Array<MiniTestWhereInput>>;
  SendMiniTest?: InputMaybe<SendMiniTestRelationFilter>;
  account?: InputMaybe<AccountRelationFilter>;
  accountId?: InputMaybe<StringFilter>;
  class?: InputMaybe<ClassRelationFilter>;
  classId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  finished?: InputMaybe<IntFilter>;
  formTest?: InputMaybe<FormTestRelationFilter>;
  formTestId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  point?: InputMaybe<IntFilter>;
  remainTimes?: InputMaybe<IntFilter>;
  section?: InputMaybe<SectionRelationFilter>;
  sectionId?: InputMaybe<StringFilter>;
  sendMiniTestId?: InputMaybe<IntFilter>;
  totalPoint?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MiniTestWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminChangeStatusAccount: Scalars['Boolean'];
  adminChangeStatusFormTest: Scalars['Boolean'];
  adminChangeStatusQuestion: Scalars['Boolean'];
  adminCreateAdmin: Scalars['Boolean'];
  adminCreateClass: Scalars['Boolean'];
  adminCreateImages: Scalars['Boolean'];
  adminCreateMiniTest: Scalars['Boolean'];
  adminCreateQuestion: Scalars['Boolean'];
  adminCreateSchool: Scalars['Boolean'];
  adminCreateSchoolYear: Scalars['Boolean'];
  adminCreateStudent: Scalars['Boolean'];
  adminDeleteAdmin: Scalars['Boolean'];
  adminDeleteClass: Scalars['Boolean'];
  adminDeleteFormTest: Scalars['Boolean'];
  adminDeleteImages: Scalars['Boolean'];
  adminDeleteQuestion: Scalars['Boolean'];
  adminDeleteSchool: Scalars['Boolean'];
  adminDeleteStudent: Scalars['Boolean'];
  adminUpdateAdmin: Scalars['Boolean'];
  adminUpdateClass: Scalars['Boolean'];
  adminUpdateMiniTest: Scalars['Boolean'];
  adminUpdateQuestion: Scalars['Boolean'];
  adminUpdateStudent: Scalars['Boolean'];
  changePassword: Scalars['Boolean'];
  changePasswordAdmin: Scalars['Boolean'];
  changePasswordByAdmin: Scalars['Boolean'];
  continueNationalTest: NationalTestQuestionContinueDto;
  continueUnfinishedSelfTrial: SelfTrialQuestionContinueDto;
  createCategory: Scalars['Boolean'];
  createNationalTest: FormTest;
  createPost: Post;
  deleteScheduleMiniTest: Scalars['Boolean'];
  deleteSendNationalTest: Scalars['Boolean'];
  logout: LogoutResponse;
  performExam: MiniTestQuestionDto;
  performNationalExam: NationalTestModel;
  refreshTokens: TokenResponse;
  removeNationalTest: Scalars['Boolean'];
  saveNationalTest: Scalars['Boolean'];
  saveSelfTrial: Scalars['Boolean'];
  searchNationalTest: Array<SearchNationalTestModel>;
  sendCodeResetPassword: Scalars['Boolean'];
  sendMiniTest: Scalars['Boolean'];
  sendNationalTest: Scalars['Boolean'];
  signIn: Auth;
  submitAnswerMiniTestQuestion: Array<MiniTestQuestionResult>;
  submitAnswerQuestionAi: Array<StudentQuestion>;
  submitNationalTest: Array<StudentQuestion>;
  submitSelfTrial: Array<StudentQuestion>;
  updateNationalTest: Scalars['Boolean'];
  updateScheduleMiniTest: Scalars['Boolean'];
  updateSendNationalTest: Scalars['Boolean'];
  validateCode: Scalars['Boolean'];
};

export type MutationAdminChangeStatusAccountArgs = {
  where: AccountWhereUniqueInput;
};

export type MutationAdminChangeStatusFormTestArgs = {
  where: FormTestWhereUniqueInput;
};

export type MutationAdminChangeStatusQuestionArgs = {
  where: QuestionWhereUniqueInput;
};

export type MutationAdminCreateAdminArgs = {
  data: CreateAdminInput;
};

export type MutationAdminCreateClassArgs = {
  data: CreateClassInput;
};

export type MutationAdminCreateImagesArgs = {
  data: Array<ImageCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationAdminCreateMiniTestArgs = {
  data: CreateMiniTestInput;
};

export type MutationAdminCreateQuestionArgs = {
  data: CreateQuestionInput;
};

export type MutationAdminCreateSchoolArgs = {
  data: CreateSchoolInput;
};

export type MutationAdminCreateSchoolYearArgs = {
  data: CreateSchoolYearInput;
};

export type MutationAdminCreateStudentArgs = {
  data: CreateStudentInput;
};

export type MutationAdminDeleteAdminArgs = {
  where: AccountWhereUniqueInput;
};

export type MutationAdminDeleteClassArgs = {
  where: ClassWhereUniqueInput;
};

export type MutationAdminDeleteFormTestArgs = {
  where: FormTestWhereUniqueInput;
};

export type MutationAdminDeleteImagesArgs = {
  where?: InputMaybe<ImageWhereInput>;
};

export type MutationAdminDeleteQuestionArgs = {
  where: QuestionWhereUniqueInput;
};

export type MutationAdminDeleteSchoolArgs = {
  where: SchoolWhereUniqueInput;
};

export type MutationAdminDeleteStudentArgs = {
  where: AccountWhereUniqueInput;
};

export type MutationAdminUpdateAdminArgs = {
  data: UpdateAdminInput;
  where: AccountWhereUniqueInput;
};

export type MutationAdminUpdateClassArgs = {
  data: UpdateClassInput;
  where: ClassWhereUniqueInput;
};

export type MutationAdminUpdateMiniTestArgs = {
  data: UpdateMiniTestInput;
  where: WhereMiniTestUniqueInput;
};

export type MutationAdminUpdateQuestionArgs = {
  data: UpdateQuestionInput;
  where: QuestionWhereUniqueInput;
};

export type MutationAdminUpdateStudentArgs = {
  data: UpdateStudentInput;
  where: AccountWhereUniqueInput;
};

export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};

export type MutationChangePasswordAdminArgs = {
  input: ChangePasswordAdmin;
};

export type MutationChangePasswordByAdminArgs = {
  data: ChangePasswordByAdminInput;
  where: AccountWhereUniqueInput;
};

export type MutationContinueNationalTestArgs = {
  input: ContinueNationalTestInput;
};

export type MutationCreateCategoryArgs = {
  where: CreateCategoryInput;
};

export type MutationCreateNationalTestArgs = {
  createNationalTestInput: CreateNationalTestInput;
};

export type MutationCreatePostArgs = {
  data: CreatePostInput;
};

export type MutationDeleteScheduleMiniTestArgs = {
  where: SendMiniTestWhereUniqueInput;
};

export type MutationDeleteSendNationalTestArgs = {
  input: DeleteSendNationalTestInput;
};

export type MutationLogoutArgs = {
  accountId: Scalars['String'];
};

export type MutationPerformExamArgs = {
  data: PerformMiniTestInput;
};

export type MutationPerformNationalExamArgs = {
  input: PerformNationalTestInput;
};

export type MutationRemoveNationalTestArgs = {
  input: DeleteNationalTestInput;
};

export type MutationSaveNationalTestArgs = {
  input: SaveNationalTestInput;
};

export type MutationSaveSelfTrialArgs = {
  input: SaveSelfTrialInput;
};

export type MutationSearchNationalTestArgs = {
  input: SearchNationalTestInput;
};

export type MutationSendCodeResetPasswordArgs = {
  data: PasswordInput;
};

export type MutationSendMiniTestArgs = {
  data: SendMiniTestInput;
};

export type MutationSendNationalTestArgs = {
  input: SendNationalTestInput;
};

export type MutationSignInArgs = {
  data: LoginInput;
};

export type MutationSubmitAnswerMiniTestQuestionArgs = {
  data: SubmitMiniTestInput;
};

export type MutationSubmitAnswerQuestionAiArgs = {
  data: SubmitQuestionAiInput;
};

export type MutationSubmitNationalTestArgs = {
  data: SubmitNationalTestQuestionInput;
};

export type MutationSubmitSelfTrialArgs = {
  data: SubmitSelfTrialQuestionInput;
};

export type MutationUpdateNationalTestArgs = {
  input: UpdateNationalTestInput;
};

export type MutationUpdateScheduleMiniTestArgs = {
  data: UpdateSendMiniTestInput;
};

export type MutationUpdateSendNationalTestArgs = {
  input: UpdateSendNationalTestInput;
};

export type MutationValidateCodeArgs = {
  data: ValidateResetCodeInput;
};

export type NationalAggregationListRelationFilter = {
  every?: InputMaybe<NationalAggregationWhereInput>;
  none?: InputMaybe<NationalAggregationWhereInput>;
  some?: InputMaybe<NationalAggregationWhereInput>;
};

export type NationalAggregationWhereInput = {
  AND?: InputMaybe<Array<NationalAggregationWhereInput>>;
  NOT?: InputMaybe<Array<NationalAggregationWhereInput>>;
  OR?: InputMaybe<Array<NationalAggregationWhereInput>>;
  classAggregationUrl?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isFinished?: InputMaybe<BoolFilter>;
  sendNationalTestId?: InputMaybe<IntFilter>;
  sendNationaltest?: InputMaybe<SendNationalTestRelationFilter>;
  studentAggregationUrl?: InputMaybe<StringNullableFilter>;
};

export type NationalQuestionInput = {
  answers: Array<NationalTestAnswerInput>;
  questionId: Scalars['String'];
  subjectId: Scalars['String'];
};

export type NationalTestAnswerInput = {
  answerId: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  questionId: Scalars['String'];
};

export type NationalTestAnswerListRelationFilter = {
  every?: InputMaybe<NationalTestAnswerWhereInput>;
  none?: InputMaybe<NationalTestAnswerWhereInput>;
  some?: InputMaybe<NationalTestAnswerWhereInput>;
};

export type NationalTestAnswerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NationalTestAnswerWhereInput = {
  AND?: InputMaybe<Array<NationalTestAnswerWhereInput>>;
  NOT?: InputMaybe<Array<NationalTestAnswerWhereInput>>;
  NationalTest?: InputMaybe<NationalTestRelationFilter>;
  OR?: InputMaybe<Array<NationalTestAnswerWhereInput>>;
  answer?: InputMaybe<AnswerRelationFilter>;
  answerId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  isCorrect?: InputMaybe<BoolFilter>;
  nationalTestId?: InputMaybe<IntFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringFilter>;
};

export type NationalTestListRelationFilter = {
  every?: InputMaybe<NationalTestWhereInput>;
  none?: InputMaybe<NationalTestWhereInput>;
  some?: InputMaybe<NationalTestWhereInput>;
};

export type NationalTestModel = {
  __typename?: 'NationalTestModel';
  nationalTestId: Scalars['Int'];
  questions: Array<QuestionNationalTest>;
  remainTimes: Scalars['Int'];
};

export type NationalTestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NationalTestPaginationInput = {
  nationalTestId?: InputMaybe<Array<Scalars['Int']>>;
};

export type NationalTestPaginationModel = {
  __typename?: 'NationalTestPaginationModel';
  nationalTests: Array<NationalTestResultModel>;
  total: Scalars['Int'];
};

export type NationalTestQuestionContinueDto = {
  __typename?: 'NationalTestQuestionContinueDto';
  answers?: Maybe<Array<SavedNationalTestAnswer>>;
  nationalTestId: Scalars['Int'];
  questions: Array<Question>;
  remainTimes: Scalars['Int'];
};

export type NationalTestRelationFilter = {
  is?: InputMaybe<NationalTestWhereInput>;
  isNot?: InputMaybe<NationalTestWhereInput>;
};

export type NationalTestResultGroup = {
  __typename?: 'NationalTestResultGroup';
  name: Scalars['String'];
  subjects: Array<NationalTestResultSubject>;
};

export type NationalTestResultModel = {
  __typename?: 'NationalTestResultModel';
  groups: Array<NationalTestResultGroup>;
  isPass: Scalars['Boolean'];
  point: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type NationalTestResultSubject = {
  __typename?: 'NationalTestResultSubject';
  maxPoint: Scalars['Int'];
  point: Scalars['Int'];
  subjectId: Scalars['String'];
  subjectName: Scalars['String'];
  totalQuestion: Scalars['Int'];
};

export type NationalTestWhereInput = {
  AND?: InputMaybe<Array<NationalTestWhereInput>>;
  NOT?: InputMaybe<Array<NationalTestWhereInput>>;
  NationalTestAnswer?: InputMaybe<NationalTestAnswerListRelationFilter>;
  OR?: InputMaybe<Array<NationalTestWhereInput>>;
  SendNationalTest?: InputMaybe<SendNationalTestRelationFilter>;
  account?: InputMaybe<AccountRelationFilter>;
  accountId?: InputMaybe<StringFilter>;
  class?: InputMaybe<ClassRelationFilter>;
  classId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  finished?: InputMaybe<IntFilter>;
  formTest?: InputMaybe<FormTestRelationFilter>;
  formTestId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  lastQuestion?: InputMaybe<IntNullableFilter>;
  point?: InputMaybe<IntFilter>;
  remainTimes?: InputMaybe<IntFilter>;
  sendNationalTestId?: InputMaybe<IntFilter>;
  totalPoint?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumPoemFilter = {
  equals?: InputMaybe<Poem>;
  in?: InputMaybe<Array<Poem>>;
  not?: InputMaybe<NestedEnumPoemFilter>;
  notIn?: InputMaybe<Array<Poem>>;
};

export type NestedEnumPublicFilter = {
  equals?: InputMaybe<Public>;
  in?: InputMaybe<Array<Public>>;
  not?: InputMaybe<NestedEnumPublicFilter>;
  notIn?: InputMaybe<Array<Public>>;
};

export type NestedEnumRoleNullableFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumSemesterNullableFilter = {
  equals?: InputMaybe<Semester>;
  in?: InputMaybe<Array<Semester>>;
  not?: InputMaybe<NestedEnumSemesterNullableFilter>;
  notIn?: InputMaybe<Array<Semester>>;
};

export type NestedEnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedEnumStatusNullableFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusNullableFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedEnumTypeFilter = {
  equals?: InputMaybe<Type>;
  in?: InputMaybe<Array<Type>>;
  not?: InputMaybe<NestedEnumTypeFilter>;
  notIn?: InputMaybe<Array<Type>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NotFinishMiniTestDto = {
  __typename?: 'NotFinishMiniTestDto';
  SendMiniTest: SendMiniTestNotFinishMiniTestDto;
  account: AccountNotFinishMiniTestDto;
  class: ClassNotFinishMiniTestDto;
};

export type NotFinishMiniTestInput = {
  classId?: InputMaybe<Array<Scalars['String']>>;
  facultyId?: InputMaybe<Array<Scalars['String']>>;
  schoolYearId?: InputMaybe<Scalars['String']>;
  sendMiniTestId: Scalars['Int'];
};

export type NotFinishNationalTestInput = {
  classIds?: InputMaybe<Array<Scalars['String']>>;
  facultyIds?: InputMaybe<Array<Scalars['String']>>;
  schoolYearIds?: InputMaybe<Array<Scalars['String']>>;
  sendNationalTestId?: InputMaybe<Scalars['Int']>;
};

export type NotFinishNationalTestModel = {
  __typename?: 'NotFinishNationalTestModel';
  className?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  schoolFaculty?: Maybe<Scalars['String']>;
};

export type PasswordInput = {
  email: Scalars['String'];
};

export type PerformMiniTestInput = {
  classId: Scalars['String'];
  formTestId: Scalars['String'];
  sectionId: Scalars['String'];
  sendMiniTestId: Scalars['Int'];
};

export type PerformNationalTestInput = {
  nationalTestId: Scalars['Int'];
};

export enum Poem {
  MiniTest = 'MINI_TEST',
  NationalTrial = 'NATIONAL_TRIAL',
}

export type Post = {
  __typename?: 'Post';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum Public {
  Global = 'GLOBAL',
  Myschool = 'MYSCHOOL',
}

export type Query = {
  __typename?: 'Query';
  adminFindManyMiniTest: Array<FormTest>;
  adminFormTest: Array<FormTest>;
  adminGetAccountById: User;
  adminGetAccounts: Array<User>;
  adminGetAllSchools: Array<School>;
  adminGetImages: Array<Image>;
  adminGetQuestions: Array<Question>;
  adminGetTotalImage: Scalars['Int'];
  adminMiniTestStatisticDetail: StudentStatisticByMiniTest;
  adminMinitestStatistic: AdminStatisticByClassDto;
  adminQuestionAiAnalysis: LearningAnalysisIndividual;
  adminSearchMiniTest: FormTest;
  aiTestResult: AtTestPaginationModel;
  endScheduleNationalTest: Scalars['Boolean'];
  filterSchoolYears: Array<SchoolYear>;
  getAllCategories: Array<AllSubjectsModel>;
  getCategoriesByChapterId: Array<Category>;
  getChapterBySubjectId: Array<Chapter>;
  getClassById: Class;
  getClasses: Array<Class>;
  getMiniTestById: FormTest;
  getMyExam: GetSendMiniTestResult;
  getMyNationalExam: Array<StudentNationalTestModel>;
  getMySchool: School;
  getPost: Post;
  getQuestionAi: AiQuestion;
  getQuestionAiBySubject: AiQuestion;
  getQuestionById: Question;
  getRandomQuestions: Array<Question>;
  getScheduleMiniTest: GetSendMiniTestResult;
  getScheduleMiniTestById: SendMiniTest;
  getSchoolFaculties: Array<SchoolFaculty>;
  getSchoolYears: Array<SchoolYear>;
  getStudentLatestTestHistory: StudentLatestTestHistory;
  haveUnfinishedSelfTrial: Scalars['Boolean'];
  listSendNationalTest: SendNationalTestPagination;
  me: User;
  nationalTest: FormTest;
  nationalTrialResult: NationalTestPaginationModel;
  notFinishNationalTest: Array<NotFinishNationalTestModel>;
  notFinishedMiniTestStudent: Array<NotFinishMiniTestDto>;
  questionAiSelfStatistic: Array<QuestionAiSelfStatistic>;
  schoolAiAnalysis: LearningAnalysisSchool;
  sections: Array<Section>;
  selfTrialExamination: SelfTrialQuestionDto;
  selfTrialResult: SelfTestPaginationModel;
  sendNationalTestDetail: SendNationalTestsDetailModel;
  subjects: Array<Subject>;
  totalAccount: Scalars['Int'];
  totalFormTest: Scalars['Int'];
  totalQuestion: Scalars['Int'];
  totalSchool: Scalars['Int'];
};

export type QueryAdminFindManyMiniTestArgs = {
  cursor?: InputMaybe<FormTestWhereUniqueInput>;
  distinct?: InputMaybe<Array<FormTestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FormTestOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormTestWhereInput>;
};

export type QueryAdminFormTestArgs = {
  cursor?: InputMaybe<FormTestWhereUniqueInput>;
  distinct?: InputMaybe<Array<FormTestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FormTestOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormTestWhereInput>;
};

export type QueryAdminGetAccountByIdArgs = {
  where: AccountWhereUniqueInput;
};

export type QueryAdminGetAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountWhereInput>;
};

export type QueryAdminGetAllSchoolsArgs = {
  cursor?: InputMaybe<SchoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};

export type QueryAdminGetImagesArgs = {
  cursor?: InputMaybe<ImageWhereUniqueInput>;
  distinct?: InputMaybe<Array<ImageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ImageOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageWhereInput>;
};

export type QueryAdminGetQuestionsArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};

export type QueryAdminGetTotalImageArgs = {
  where?: InputMaybe<ImageWhereInput>;
};

export type QueryAdminMiniTestStatisticDetailArgs = {
  input: StudentStatisticByMiniTestInput;
};

export type QueryAdminMinitestStatisticArgs = {
  cursor?: InputMaybe<SendMiniTestWhereUniqueInput>;
  distinct?: InputMaybe<Array<SendMiniTestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SendMiniTestOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SendMiniTestWhereInput>;
};

export type QueryAdminQuestionAiAnalysisArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountWhereInput>;
};

export type QueryAdminSearchMiniTestArgs = {
  name: Scalars['String'];
};

export type QueryAiTestResultArgs = {
  cursor?: InputMaybe<MiniTestWhereUniqueInput>;
  distinct?: InputMaybe<Array<MiniTestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MiniTestOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MiniTestWhereInput>;
};

export type QueryEndScheduleNationalTestArgs = {
  input: EndSendNationalTestInput;
};

export type QueryFilterSchoolYearsArgs = {
  input: FilterSchoolYearInput;
};

export type QueryGetCategoriesByChapterIdArgs = {
  chapterId: Scalars['String'];
};

export type QueryGetChapterBySubjectIdArgs = {
  subjectId: Scalars['String'];
};

export type QueryGetClassByIdArgs = {
  where: ClassWhereUniqueInput;
};

export type QueryGetClassesArgs = {
  cursor?: InputMaybe<ClassWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClassScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClassOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClassWhereInput>;
};

export type QueryGetMiniTestByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetPostArgs = {
  where: PostWhereUniqueInput;
};

export type QueryGetQuestionAiBySubjectArgs = {
  data: QuestionAiBySubjectInput;
};

export type QueryGetQuestionByIdArgs = {
  where: QuestionWhereUniqueInput;
};

export type QueryGetRandomQuestionsArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};

export type QueryGetScheduleMiniTestArgs = {
  cursor?: InputMaybe<SendMiniTestWhereUniqueInput>;
  distinct?: InputMaybe<Array<SendMiniTestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SendMiniTestOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SendMiniTestWhereInput>;
};

export type QueryGetScheduleMiniTestByIdArgs = {
  where: SendMiniTestWhereUniqueInput;
};

export type QueryGetSchoolFacultiesArgs = {
  schoolId: Scalars['String'];
};

export type QueryGetSchoolYearsArgs = {
  where: WhereSchoolYearsInput;
};

export type QueryListSendNationalTestArgs = {
  input: FindSendNationalTestInput;
};

export type QueryNationalTestArgs = {
  id: Scalars['String'];
};

export type QueryNationalTrialResultArgs = {
  input: NationalTestPaginationInput;
};

export type QueryNotFinishNationalTestArgs = {
  input: NotFinishNationalTestInput;
};

export type QueryNotFinishedMiniTestStudentArgs = {
  input: NotFinishMiniTestInput;
};

export type QuerySchoolAiAnalysisArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountWhereInput>;
};

export type QuerySectionsArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SectionOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SectionWhereInput>;
};

export type QuerySelfTrialExaminationArgs = {
  data: SelfTrialExaminationInput;
};

export type QuerySelfTrialResultArgs = {
  input: SelfTrialInput;
};

export type QuerySendNationalTestDetailArgs = {
  input: GetSendNationalTestInput;
};

export type QuerySubjectsArgs = {
  cursor?: InputMaybe<SubjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubjectOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubjectWhereInput>;
};

export type QueryTotalAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
};

export type QueryTotalFormTestArgs = {
  where?: InputMaybe<FormTestWhereInput>;
};

export type QueryTotalQuestionArgs = {
  where?: InputMaybe<QuestionWhereInput>;
};

export type QueryTotalSchoolArgs = {
  where?: InputMaybe<SchoolWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Question = {
  __typename?: 'Question';
  account?: Maybe<User>;
  accountId?: Maybe<Scalars['String']>;
  answer?: Maybe<Array<Answer>>;
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']>;
  chapter?: Maybe<Chapter>;
  chapterId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  file?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identityNumber?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  no?: Maybe<Scalars['Int']>;
  public: QuestionPublic;
  school?: Maybe<School>;
  schoolId?: Maybe<Scalars['String']>;
  status: Status;
  subject?: Maybe<Subject>;
  subjectId?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type QuestionAiBySubjectInput = {
  subjectId: Scalars['String'];
};

export type QuestionAiSelfStatistic = {
  __typename?: 'QuestionAiSelfStatistic';
  rank: Scalars['String'];
  subjectId: Scalars['String'];
  subjectName: Scalars['String'];
  totalCorrect: Scalars['Int'];
  totalInCorrect: Scalars['Int'];
  totalQuestion: Scalars['Int'];
};

export type QuestionImage = {
  __typename?: 'QuestionImage';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  identityNumber?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type QuestionInput = {
  answers: Array<AnswerInput>;
  questionId: Scalars['String'];
  subjectId: Scalars['String'];
};

export type QuestionListRelationFilter = {
  every?: InputMaybe<QuestionWhereInput>;
  none?: InputMaybe<QuestionWhereInput>;
  some?: InputMaybe<QuestionWhereInput>;
};

export type QuestionMiniTest = {
  __typename?: 'QuestionMiniTest';
  account?: Maybe<User>;
  accountId?: Maybe<Scalars['String']>;
  answer?: Maybe<Array<AnswerMiniTest>>;
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']>;
  chapter?: Maybe<Chapter>;
  chapterId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['String'];
  identityNumber?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  public: QuestionPublic;
  school?: Maybe<School>;
  schoolId?: Maybe<Scalars['String']>;
  status: Status;
  subject?: Maybe<Subject>;
  subjectId?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type QuestionMiniTestInput = {
  answers: Array<AnswerMiniTestInput>;
  questionId: Scalars['String'];
  subjectId: Scalars['String'];
};

export type QuestionNationalTest = {
  __typename?: 'QuestionNationalTest';
  answer?: Maybe<Array<AnswerNationalTest>>;
  description: Scalars['String'];
  id: Scalars['String'];
  identityNumber?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  subjectId: Scalars['String'];
  title: Scalars['String'];
};

export type QuestionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum QuestionOrderByRelevanceFieldEnum {
  AccountId = 'accountId',
  CategoryId = 'categoryId',
  ChapterId = 'chapterId',
  Description = 'description',
  File = 'file',
  Id = 'id',
  IdentityNumber = 'identityNumber',
  SchoolId = 'schoolId',
  SubjectId = 'subjectId',
  Title = 'title',
}

export type QuestionOrderByRelevanceInput = {
  fields: Array<QuestionOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type QuestionOrderByWithRelationAndSearchRelevanceInput = {
  AiTestAnswer?: InputMaybe<AiTestAnswerOrderByRelationAggregateInput>;
  AiTestQuestion?: InputMaybe<AiTestQuestionOrderByRelationAggregateInput>;
  Image?: InputMaybe<ImageOrderByRelationAggregateInput>;
  MiniTestAnswer?: InputMaybe<MiniTestAnswerOrderByRelationAggregateInput>;
  NationalTestAnswer?: InputMaybe<NationalTestAnswerOrderByRelationAggregateInput>;
  SelfTrialAnswer?: InputMaybe<SelfTrialAnswerOrderByRelationAggregateInput>;
  SelfTrialQuestion?: InputMaybe<SelfTrialQuestionOrderByRelationAggregateInput>;
  SelfTrialQuestionStudent?: InputMaybe<SelfTrialQuestionStudentOrderByRelationAggregateInput>;
  StudentQuestion?: InputMaybe<StudentQuestionOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<QuestionOrderByRelevanceInput>;
  account?: InputMaybe<AccountOrderByWithRelationAndSearchRelevanceInput>;
  accountId?: InputMaybe<SortOrder>;
  answer?: InputMaybe<AnswerOrderByRelationAggregateInput>;
  category?: InputMaybe<CategoryOrderByWithRelationAndSearchRelevanceInput>;
  categoryId?: InputMaybe<SortOrder>;
  chapter?: InputMaybe<ChapterOrderByWithRelationAndSearchRelevanceInput>;
  chapterId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  file?: InputMaybe<SortOrder>;
  formTestQuestion?: InputMaybe<FormTestQuestionOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  identityNumber?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  no?: InputMaybe<SortOrder>;
  public?: InputMaybe<SortOrder>;
  questionTest?: InputMaybe<QuestionTestOrderByRelationAggregateInput>;
  school?: InputMaybe<SchoolOrderByWithRelationAndSearchRelevanceInput>;
  schoolId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  subject?: InputMaybe<SubjectOrderByWithRelationAndSearchRelevanceInput>;
  subjectId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Question Public */
export enum QuestionPublic {
  Global = 'GLOBAL',
  Myschool = 'MYSCHOOL',
}

export type QuestionRelationFilter = {
  is?: InputMaybe<QuestionWhereInput>;
  isNot?: InputMaybe<QuestionWhereInput>;
};

export type QuestionS = {
  __typename?: 'QuestionS';
  answer: Array<StudentMiniTestAnswerQuestion>;
  questionId: Scalars['String'];
};

export enum QuestionScalarFieldEnum {
  AccountId = 'accountId',
  CategoryId = 'categoryId',
  ChapterId = 'chapterId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  File = 'file',
  Id = 'id',
  IdentityNumber = 'identityNumber',
  Level = 'level',
  No = 'no',
  Public = 'public',
  SchoolId = 'schoolId',
  Status = 'status',
  SubjectId = 'subjectId',
  Title = 'title',
  Type = 'type',
  UpdatedAt = 'updatedAt',
}

export type QuestionTestListRelationFilter = {
  every?: InputMaybe<QuestionTestWhereInput>;
  none?: InputMaybe<QuestionTestWhereInput>;
  some?: InputMaybe<QuestionTestWhereInput>;
};

export type QuestionTestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type QuestionTestWhereInput = {
  AND?: InputMaybe<Array<QuestionTestWhereInput>>;
  NOT?: InputMaybe<Array<QuestionTestWhereInput>>;
  OR?: InputMaybe<Array<QuestionTestWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isCorrect?: InputMaybe<BoolFilter>;
  isUsed?: InputMaybe<BoolFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringNullableFilter>;
  subject?: InputMaybe<SubjectRelationFilter>;
  subjectId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** Question Type */
export enum QuestionType {
  Image = 'IMAGE',
  Text = 'TEXT',
}

export type QuestionWhereInput = {
  AND?: InputMaybe<Array<QuestionWhereInput>>;
  AiTestAnswer?: InputMaybe<AiTestAnswerListRelationFilter>;
  AiTestQuestion?: InputMaybe<AiTestQuestionListRelationFilter>;
  Image?: InputMaybe<ImageListRelationFilter>;
  MiniTestAnswer?: InputMaybe<MiniTestAnswerListRelationFilter>;
  NOT?: InputMaybe<Array<QuestionWhereInput>>;
  NationalTestAnswer?: InputMaybe<NationalTestAnswerListRelationFilter>;
  OR?: InputMaybe<Array<QuestionWhereInput>>;
  SelfTrialAnswer?: InputMaybe<SelfTrialAnswerListRelationFilter>;
  SelfTrialQuestion?: InputMaybe<SelfTrialQuestionListRelationFilter>;
  SelfTrialQuestionStudent?: InputMaybe<SelfTrialQuestionStudentListRelationFilter>;
  StudentQuestion?: InputMaybe<StudentQuestionListRelationFilter>;
  account?: InputMaybe<AccountRelationFilter>;
  accountId?: InputMaybe<StringNullableFilter>;
  answer?: InputMaybe<AnswerListRelationFilter>;
  category?: InputMaybe<CategoryRelationFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  chapter?: InputMaybe<ChapterRelationFilter>;
  chapterId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  file?: InputMaybe<StringNullableFilter>;
  formTestQuestion?: InputMaybe<FormTestQuestionListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  identityNumber?: InputMaybe<StringNullableFilter>;
  level?: InputMaybe<IntFilter>;
  no?: InputMaybe<IntFilter>;
  public?: InputMaybe<EnumPublicFilter>;
  questionTest?: InputMaybe<QuestionTestListRelationFilter>;
  school?: InputMaybe<SchoolRelationFilter>;
  schoolId?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  subject?: InputMaybe<SubjectRelationFilter>;
  subjectId?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type QuestionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum Role {
  AdminApp = 'ADMIN_APP',
  AdminNational = 'ADMIN_NATIONAL',
  FormTeacher = 'FORM_TEACHER',
  SchoolManager = 'SCHOOL_MANAGER',
  Student = 'STUDENT',
  Teacher = 'TEACHER',
}

export type SaveNationalTestAnswerInput = {
  answerId: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  questionId: Scalars['String'];
};

export type SaveNationalTestInput = {
  nationalTestId: Scalars['Int'];
  questions: Array<SaveNationalTestQuestionInput>;
};

export type SaveNationalTestQuestionInput = {
  answers: Array<SaveNationalTestAnswerInput>;
  questionId: Scalars['String'];
  subjectId: Scalars['String'];
};

export type SaveSelfTrialAnswerInput = {
  answerId: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  questionId: Scalars['String'];
};

export type SaveSelfTrialInput = {
  questions: Array<SaveSelfTrialQuestionInput>;
  selfTrialId: Scalars['Int'];
};

export type SaveSelfTrialQuestionInput = {
  answers: Array<SaveSelfTrialAnswerInput>;
  questionId: Scalars['String'];
  subjectId: Scalars['String'];
};

export type SavedNationalTestAnswer = {
  __typename?: 'SavedNationalTestAnswer';
  answerId: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  questionId: Scalars['String'];
};

export type SavedSelfTrialAnswer = {
  __typename?: 'SavedSelfTrialAnswer';
  answerId: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  questionId: Scalars['String'];
};

export type School = {
  __typename?: 'School';
  abbreviations: Scalars['String'];
  account?: Maybe<Array<User>>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  schoolFaculty?: Maybe<Array<SchoolFaculty>>;
  updatedAt: Scalars['DateTime'];
};

export type SchoolFaculty = {
  __typename?: 'SchoolFaculty';
  account?: Maybe<Array<User>>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  school?: Maybe<School>;
  schoolYear?: Maybe<Array<SchoolYear>>;
  updatedAt: Scalars['DateTime'];
};

export type SchoolFacultyFinishMiniTestDto = {
  __typename?: 'SchoolFacultyFinishMiniTestDto';
  SchoolFaculty: MiniTestFacultyFinishMiniTestDto;
};

export type SchoolFacultyListRelationFilter = {
  every?: InputMaybe<SchoolFacultyWhereInput>;
  none?: InputMaybe<SchoolFacultyWhereInput>;
  some?: InputMaybe<SchoolFacultyWhereInput>;
};

export type SchoolFacultyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum SchoolFacultyOrderByRelevanceFieldEnum {
  Code = 'code',
  Id = 'id',
  Name = 'name',
  SchoolId = 'schoolId',
}

export type SchoolFacultyOrderByRelevanceInput = {
  fields: Array<SchoolFacultyOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type SchoolFacultyOrderByWithRelationAndSearchRelevanceInput = {
  MiniTestFaculty?: InputMaybe<MiniTestFacultyOrderByRelationAggregateInput>;
  SendNationalTestSchoolFaculty?: InputMaybe<SendNationalTestSchoolFacultyOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<SchoolFacultyOrderByRelevanceInput>;
  account?: InputMaybe<AccountOrderByRelationAggregateInput>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  school?: InputMaybe<SchoolOrderByWithRelationAndSearchRelevanceInput>;
  schoolId?: InputMaybe<SortOrder>;
  schoolYear?: InputMaybe<SchoolYearOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SchoolFacultyRelationFilter = {
  is?: InputMaybe<SchoolFacultyWhereInput>;
  isNot?: InputMaybe<SchoolFacultyWhereInput>;
};

export type SchoolFacultyWhereInput = {
  AND?: InputMaybe<Array<SchoolFacultyWhereInput>>;
  MiniTestFaculty?: InputMaybe<MiniTestFacultyListRelationFilter>;
  NOT?: InputMaybe<Array<SchoolFacultyWhereInput>>;
  OR?: InputMaybe<Array<SchoolFacultyWhereInput>>;
  SendNationalTestSchoolFaculty?: InputMaybe<SendNationalTestSchoolFacultyListRelationFilter>;
  account?: InputMaybe<AccountListRelationFilter>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  school?: InputMaybe<SchoolRelationFilter>;
  schoolId?: InputMaybe<StringNullableFilter>;
  schoolYear?: InputMaybe<SchoolYearListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum SchoolOrderByRelevanceFieldEnum {
  Abbreviations = 'abbreviations',
  Code = 'code',
  Id = 'id',
  Name = 'name',
}

export type SchoolOrderByRelevanceInput = {
  fields: Array<SchoolOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type SchoolOrderByWithRelationAndSearchRelevanceInput = {
  SendMiniTest?: InputMaybe<SendMiniTestOrderByRelationAggregateInput>;
  SendNationalTest?: InputMaybe<SendNationalTestOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<SchoolOrderByRelevanceInput>;
  abbreviations?: InputMaybe<SortOrder>;
  account?: InputMaybe<AccountOrderByRelationAggregateInput>;
  class?: InputMaybe<ClassOrderByRelationAggregateInput>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  formTest?: InputMaybe<FormTestOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  question?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  schoolFaculty?: InputMaybe<SchoolFacultyOrderByRelationAggregateInput>;
  schoolYear?: InputMaybe<SchoolYearOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SchoolRelationFilter = {
  is?: InputMaybe<SchoolWhereInput>;
  isNot?: InputMaybe<SchoolWhereInput>;
};

export enum SchoolScalarFieldEnum {
  Abbreviations = 'abbreviations',
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type SchoolWhereInput = {
  AND?: InputMaybe<Array<SchoolWhereInput>>;
  NOT?: InputMaybe<Array<SchoolWhereInput>>;
  OR?: InputMaybe<Array<SchoolWhereInput>>;
  SendMiniTest?: InputMaybe<SendMiniTestListRelationFilter>;
  SendNationalTest?: InputMaybe<SendNationalTestListRelationFilter>;
  abbreviations?: InputMaybe<StringNullableFilter>;
  account?: InputMaybe<AccountListRelationFilter>;
  class?: InputMaybe<ClassListRelationFilter>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  formTest?: InputMaybe<FormTestListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  question?: InputMaybe<QuestionListRelationFilter>;
  schoolFaculty?: InputMaybe<SchoolFacultyListRelationFilter>;
  schoolYear?: InputMaybe<SchoolYearListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SchoolWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type SchoolYear = {
  __typename?: 'SchoolYear';
  account?: Maybe<Array<User>>;
  class?: Maybe<Array<Class>>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  schoolFaculty?: Maybe<SchoolFaculty>;
  schoolFacultyId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  year: Scalars['String'];
};

export type SchoolYearListRelationFilter = {
  every?: InputMaybe<SchoolYearWhereInput>;
  none?: InputMaybe<SchoolYearWhereInput>;
  some?: InputMaybe<SchoolYearWhereInput>;
};

export type SchoolYearMiniTest = {
  __typename?: 'SchoolYearMiniTest';
  year: Scalars['String'];
};

export type SchoolYearOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum SchoolYearOrderByRelevanceFieldEnum {
  Id = 'id',
  SchoolFacultyId = 'schoolFacultyId',
  SchoolId = 'schoolId',
  Year = 'year',
}

export type SchoolYearOrderByRelevanceInput = {
  fields: Array<SchoolYearOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type SchoolYearOrderByWithRelationAndSearchRelevanceInput = {
  SendMiniTest?: InputMaybe<SendMiniTestOrderByRelationAggregateInput>;
  SendNationalTestSchoolYear?: InputMaybe<SendNationalTestSchoolYearOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<SchoolYearOrderByRelevanceInput>;
  account?: InputMaybe<AccountOrderByRelationAggregateInput>;
  class?: InputMaybe<ClassOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  school?: InputMaybe<SchoolOrderByWithRelationAndSearchRelevanceInput>;
  schoolFaculty?: InputMaybe<SchoolFacultyOrderByWithRelationAndSearchRelevanceInput>;
  schoolFacultyId?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
};

export type SchoolYearRelationFilter = {
  is?: InputMaybe<SchoolYearWhereInput>;
  isNot?: InputMaybe<SchoolYearWhereInput>;
};

export type SchoolYearWhereInput = {
  AND?: InputMaybe<Array<SchoolYearWhereInput>>;
  NOT?: InputMaybe<Array<SchoolYearWhereInput>>;
  OR?: InputMaybe<Array<SchoolYearWhereInput>>;
  SendMiniTest?: InputMaybe<SendMiniTestListRelationFilter>;
  SendNationalTestSchoolYear?: InputMaybe<SendNationalTestSchoolYearListRelationFilter>;
  account?: InputMaybe<AccountListRelationFilter>;
  class?: InputMaybe<ClassListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  school?: InputMaybe<SchoolRelationFilter>;
  schoolFaculty?: InputMaybe<SchoolFacultyRelationFilter>;
  schoolFacultyId?: InputMaybe<StringNullableFilter>;
  schoolId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  year?: InputMaybe<StringFilter>;
};

export type SearchNationalTestInput = {
  name: Scalars['String'];
};

export type SearchNationalTestModel = {
  __typename?: 'SearchNationalTestModel';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Section = {
  __typename?: 'Section';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SectionName = {
  __typename?: 'SectionName';
  name: Scalars['String'];
};

export enum SectionOrderByRelevanceFieldEnum {
  Id = 'id',
  Name = 'name',
}

export type SectionOrderByRelevanceInput = {
  fields: Array<SectionOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type SectionOrderByWithRelationAndSearchRelevanceInput = {
  MiniTest?: InputMaybe<MiniTestOrderByRelationAggregateInput>;
  SendMiniTest?: InputMaybe<SendMiniTestOrderByRelationAggregateInput>;
  SubjectSection?: InputMaybe<SubjectSectionOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<SectionOrderByRelevanceInput>;
  formTest?: InputMaybe<FormTestOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type SectionRelationFilter = {
  is?: InputMaybe<SectionWhereInput>;
  isNot?: InputMaybe<SectionWhereInput>;
};

export enum SectionScalarFieldEnum {
  Id = 'id',
  Name = 'name',
}

export type SectionWhereInput = {
  AND?: InputMaybe<Array<SectionWhereInput>>;
  MiniTest?: InputMaybe<MiniTestListRelationFilter>;
  NOT?: InputMaybe<Array<SectionWhereInput>>;
  OR?: InputMaybe<Array<SectionWhereInput>>;
  SendMiniTest?: InputMaybe<SendMiniTestListRelationFilter>;
  SubjectSection?: InputMaybe<SubjectSectionListRelationFilter>;
  formTest?: InputMaybe<FormTestListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type SectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type SelfTestGroup = {
  __typename?: 'SelfTestGroup';
  name: Scalars['String'];
  subjects: Array<SelfTestSubject>;
};

export type SelfTestModel = {
  __typename?: 'SelfTestModel';
  groups: Array<SelfTestGroup>;
  isPass: Scalars['Boolean'];
  point: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type SelfTestPaginationModel = {
  __typename?: 'SelfTestPaginationModel';
  selfTests: Array<SelfTestModel>;
  total: Scalars['Int'];
};

export type SelfTestSubject = {
  __typename?: 'SelfTestSubject';
  maxPoint: Scalars['Int'];
  point: Scalars['Int'];
  subjectId: Scalars['String'];
  subjectName: Scalars['String'];
  totalQuestion: Scalars['Int'];
};

export type SelfTrialAnswerInput = {
  answerId: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  questionId: Scalars['String'];
};

export type SelfTrialAnswerListRelationFilter = {
  every?: InputMaybe<SelfTrialAnswerWhereInput>;
  none?: InputMaybe<SelfTrialAnswerWhereInput>;
  some?: InputMaybe<SelfTrialAnswerWhereInput>;
};

export type SelfTrialAnswerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SelfTrialAnswerWhereInput = {
  AND?: InputMaybe<Array<SelfTrialAnswerWhereInput>>;
  NOT?: InputMaybe<Array<SelfTrialAnswerWhereInput>>;
  OR?: InputMaybe<Array<SelfTrialAnswerWhereInput>>;
  answer?: InputMaybe<AnswerRelationFilter>;
  answerId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  isCorrect?: InputMaybe<BoolFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringFilter>;
  selfTrial?: InputMaybe<SelfTrialRelationFilter>;
  selfTrialId?: InputMaybe<IntFilter>;
};

export type SelfTrialExaminationInput = {
  level: Scalars['Int'];
};

export type SelfTrialInput = {
  selfTrialId?: InputMaybe<Array<Scalars['Int']>>;
};

export type SelfTrialListRelationFilter = {
  every?: InputMaybe<SelfTrialWhereInput>;
  none?: InputMaybe<SelfTrialWhereInput>;
  some?: InputMaybe<SelfTrialWhereInput>;
};

export type SelfTrialOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SelfTrialQuestionContinueDto = {
  __typename?: 'SelfTrialQuestionContinueDto';
  answers?: Maybe<Array<SavedSelfTrialAnswer>>;
  questions: Array<Question>;
  remainTimes: Scalars['Int'];
  selfTrialId: Scalars['Int'];
};

export type SelfTrialQuestionDto = {
  __typename?: 'SelfTrialQuestionDto';
  questions: Array<Question>;
  remainTimes: Scalars['Int'];
  selfTrialTestId: Scalars['Int'];
};

export type SelfTrialQuestionInput = {
  answers: Array<SelfTrialAnswerInput>;
  questionId: Scalars['String'];
  subjectId: Scalars['String'];
};

export type SelfTrialQuestionListRelationFilter = {
  every?: InputMaybe<SelfTrialQuestionWhereInput>;
  none?: InputMaybe<SelfTrialQuestionWhereInput>;
  some?: InputMaybe<SelfTrialQuestionWhereInput>;
};

export type SelfTrialQuestionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SelfTrialQuestionStudentListRelationFilter = {
  every?: InputMaybe<SelfTrialQuestionStudentWhereInput>;
  none?: InputMaybe<SelfTrialQuestionStudentWhereInput>;
  some?: InputMaybe<SelfTrialQuestionStudentWhereInput>;
};

export type SelfTrialQuestionStudentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SelfTrialQuestionStudentWhereInput = {
  AND?: InputMaybe<Array<SelfTrialQuestionStudentWhereInput>>;
  NOT?: InputMaybe<Array<SelfTrialQuestionStudentWhereInput>>;
  OR?: InputMaybe<Array<SelfTrialQuestionStudentWhereInput>>;
  account?: InputMaybe<AccountRelationFilter>;
  accountId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  isCorrect?: InputMaybe<BoolFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringFilter>;
  subject?: InputMaybe<SubjectRelationFilter>;
  subjectId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SelfTrialQuestionWhereInput = {
  AND?: InputMaybe<Array<SelfTrialQuestionWhereInput>>;
  NOT?: InputMaybe<Array<SelfTrialQuestionWhereInput>>;
  OR?: InputMaybe<Array<SelfTrialQuestionWhereInput>>;
  id?: InputMaybe<IntFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringFilter>;
  selfTrial?: InputMaybe<SelfTrialRelationFilter>;
  selfTrialId?: InputMaybe<IntFilter>;
};

export type SelfTrialRelationFilter = {
  is?: InputMaybe<SelfTrialWhereInput>;
  isNot?: InputMaybe<SelfTrialWhereInput>;
};

export type SelfTrialWhereInput = {
  AND?: InputMaybe<Array<SelfTrialWhereInput>>;
  NOT?: InputMaybe<Array<SelfTrialWhereInput>>;
  OR?: InputMaybe<Array<SelfTrialWhereInput>>;
  SelfTrialAnswer?: InputMaybe<SelfTrialAnswerListRelationFilter>;
  SelfTrialQuestion?: InputMaybe<SelfTrialQuestionListRelationFilter>;
  account?: InputMaybe<AccountRelationFilter>;
  accountId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  finished?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  isPass?: InputMaybe<BoolNullableFilter>;
  point?: InputMaybe<IntFilter>;
  remainTimes?: InputMaybe<IntFilter>;
  totalPoint?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum Semester {
  One = 'ONE',
  Two = 'TWO',
}

export type SendMiniTest = {
  __typename?: 'SendMiniTest';
  classes: Array<MiniTestClasses>;
  endDate: Scalars['DateTime'];
  extendDate: Scalars['DateTime'];
  formTest: FormTest;
  formTestId: Scalars['String'];
  id: Scalars['Int'];
  school: School;
  schoolFaculties: Array<MiniTestSchoolFaculties>;
  schoolId: Scalars['String'];
  schoolYear?: Maybe<SchoolYearMiniTest>;
  schoolYearId?: Maybe<Scalars['String']>;
  sectionId?: Maybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
};

export type SendMiniTestInput = {
  classId: Array<Scalars['String']>;
  endDate: Scalars['DateTime'];
  facultyId: Array<Scalars['String']>;
  formTestId: Scalars['String'];
  schoolId: Scalars['String'];
  schoolYearId?: InputMaybe<Scalars['String']>;
  sectionId?: InputMaybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
};

export type SendMiniTestListRelationFilter = {
  every?: InputMaybe<SendMiniTestWhereInput>;
  none?: InputMaybe<SendMiniTestWhereInput>;
  some?: InputMaybe<SendMiniTestWhereInput>;
};

export type SendMiniTestNotFinishMiniTestDto = {
  __typename?: 'SendMiniTestNotFinishMiniTestDto';
  MiniTestClass: Array<MiniTestClassFinishMiniTestDto>;
  MiniTestFaculty: Array<SchoolFacultyFinishMiniTestDto>;
};

export type SendMiniTestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum SendMiniTestOrderByRelevanceFieldEnum {
  AccountId = 'accountId',
  FormTestId = 'formTestId',
  SchoolId = 'schoolId',
  SchoolYearId = 'schoolYearId',
  SectionId = 'sectionId',
  SubjectId = 'subjectId',
}

export type SendMiniTestOrderByRelevanceInput = {
  fields: Array<SendMiniTestOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type SendMiniTestOrderByWithRelationAndSearchRelevanceInput = {
  MiniTest?: InputMaybe<MiniTestOrderByRelationAggregateInput>;
  MiniTestClass?: InputMaybe<MiniTestClassOrderByRelationAggregateInput>;
  MiniTestFaculty?: InputMaybe<MiniTestFacultyOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<SendMiniTestOrderByRelevanceInput>;
  account?: InputMaybe<AccountOrderByWithRelationAndSearchRelevanceInput>;
  accountId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  extendDate?: InputMaybe<SortOrder>;
  formTest?: InputMaybe<FormTestOrderByWithRelationAndSearchRelevanceInput>;
  formTestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  school?: InputMaybe<SchoolOrderByWithRelationAndSearchRelevanceInput>;
  schoolId?: InputMaybe<SortOrder>;
  schoolYear?: InputMaybe<SchoolYearOrderByWithRelationAndSearchRelevanceInput>;
  schoolYearId?: InputMaybe<SortOrder>;
  section?: InputMaybe<SectionOrderByWithRelationAndSearchRelevanceInput>;
  sectionId?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  subject?: InputMaybe<SubjectOrderByWithRelationAndSearchRelevanceInput>;
  subjectId?: InputMaybe<SortOrder>;
};

export type SendMiniTestRelationFilter = {
  is?: InputMaybe<SendMiniTestWhereInput>;
  isNot?: InputMaybe<SendMiniTestWhereInput>;
};

export enum SendMiniTestScalarFieldEnum {
  AccountId = 'accountId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  EndDate = 'endDate',
  ExtendDate = 'extendDate',
  FormTestId = 'formTestId',
  Id = 'id',
  SchoolId = 'schoolId',
  SchoolYearId = 'schoolYearId',
  SectionId = 'sectionId',
  StartDate = 'startDate',
  SubjectId = 'subjectId',
}

export type SendMiniTestWhereInput = {
  AND?: InputMaybe<Array<SendMiniTestWhereInput>>;
  MiniTest?: InputMaybe<MiniTestListRelationFilter>;
  MiniTestClass?: InputMaybe<MiniTestClassListRelationFilter>;
  MiniTestFaculty?: InputMaybe<MiniTestFacultyListRelationFilter>;
  NOT?: InputMaybe<Array<SendMiniTestWhereInput>>;
  OR?: InputMaybe<Array<SendMiniTestWhereInput>>;
  account?: InputMaybe<AccountRelationFilter>;
  accountId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  extendDate?: InputMaybe<DateTimeNullableFilter>;
  formTest?: InputMaybe<FormTestRelationFilter>;
  formTestId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  school?: InputMaybe<SchoolRelationFilter>;
  schoolId?: InputMaybe<StringFilter>;
  schoolYear?: InputMaybe<SchoolYearRelationFilter>;
  schoolYearId?: InputMaybe<StringNullableFilter>;
  section?: InputMaybe<SectionRelationFilter>;
  sectionId?: InputMaybe<StringNullableFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  subject?: InputMaybe<SubjectRelationFilter>;
  subjectId?: InputMaybe<StringNullableFilter>;
};

export type SendMiniTestWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type SendNationalTestClassListRelationFilter = {
  every?: InputMaybe<SendNationalTestClassWhereInput>;
  none?: InputMaybe<SendNationalTestClassWhereInput>;
  some?: InputMaybe<SendNationalTestClassWhereInput>;
};

export type SendNationalTestClassOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SendNationalTestClassWhereInput = {
  AND?: InputMaybe<Array<SendNationalTestClassWhereInput>>;
  NOT?: InputMaybe<Array<SendNationalTestClassWhereInput>>;
  OR?: InputMaybe<Array<SendNationalTestClassWhereInput>>;
  class?: InputMaybe<ClassRelationFilter>;
  classId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  sendNationalTest?: InputMaybe<SendNationalTestRelationFilter>;
  sendNationalTestId?: InputMaybe<IntFilter>;
};

export type SendNationalTestFaculty = {
  __typename?: 'SendNationalTestFaculty';
  code: Scalars['String'];
  name: Scalars['String'];
};

export type SendNationalTestInput = {
  classIds: Array<Scalars['String']>;
  endDate: Scalars['DateTime'];
  formTestId: Scalars['String'];
  name: Scalars['String'];
  schoolFacultyIds: Array<Scalars['String']>;
  schoolId: Scalars['String'];
  schoolYearIds: Array<Scalars['String']>;
  startDate: Scalars['DateTime'];
  timeRestriction: Scalars['Boolean'];
  totalTime: Scalars['Int'];
};

export type SendNationalTestListRelationFilter = {
  every?: InputMaybe<SendNationalTestWhereInput>;
  none?: InputMaybe<SendNationalTestWhereInput>;
  some?: InputMaybe<SendNationalTestWhereInput>;
};

export type SendNationalTestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SendNationalTestPagination = {
  __typename?: 'SendNationalTestPagination';
  sendNationalTests: Array<SendNationalTestsModel>;
  total: Scalars['Int'];
};

export type SendNationalTestRelationFilter = {
  is?: InputMaybe<SendNationalTestWhereInput>;
  isNot?: InputMaybe<SendNationalTestWhereInput>;
};

export type SendNationalTestSchoolFacultyListRelationFilter = {
  every?: InputMaybe<SendNationalTestSchoolFacultyWhereInput>;
  none?: InputMaybe<SendNationalTestSchoolFacultyWhereInput>;
  some?: InputMaybe<SendNationalTestSchoolFacultyWhereInput>;
};

export type SendNationalTestSchoolFacultyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SendNationalTestSchoolFacultyWhereInput = {
  AND?: InputMaybe<Array<SendNationalTestSchoolFacultyWhereInput>>;
  NOT?: InputMaybe<Array<SendNationalTestSchoolFacultyWhereInput>>;
  OR?: InputMaybe<Array<SendNationalTestSchoolFacultyWhereInput>>;
  id?: InputMaybe<IntFilter>;
  schoolFaculty?: InputMaybe<SchoolFacultyRelationFilter>;
  schoolFacultyId?: InputMaybe<StringFilter>;
  sendNationalTest?: InputMaybe<SendNationalTestRelationFilter>;
  sendNationalTestId?: InputMaybe<IntFilter>;
};

export type SendNationalTestSchoolYearListRelationFilter = {
  every?: InputMaybe<SendNationalTestSchoolYearWhereInput>;
  none?: InputMaybe<SendNationalTestSchoolYearWhereInput>;
  some?: InputMaybe<SendNationalTestSchoolYearWhereInput>;
};

export type SendNationalTestSchoolYearOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SendNationalTestSchoolYearWhereInput = {
  AND?: InputMaybe<Array<SendNationalTestSchoolYearWhereInput>>;
  NOT?: InputMaybe<Array<SendNationalTestSchoolYearWhereInput>>;
  OR?: InputMaybe<Array<SendNationalTestSchoolYearWhereInput>>;
  id?: InputMaybe<IntFilter>;
  schoolYear?: InputMaybe<SchoolYearRelationFilter>;
  schoolYearId?: InputMaybe<StringFilter>;
  sendNationalTest?: InputMaybe<SendNationalTestRelationFilter>;
  sendNationalTestId?: InputMaybe<IntFilter>;
};

export type SendNationalTestWhereInput = {
  AND?: InputMaybe<Array<SendNationalTestWhereInput>>;
  NOT?: InputMaybe<Array<SendNationalTestWhereInput>>;
  NationalAggregation?: InputMaybe<NationalAggregationListRelationFilter>;
  NationalTest?: InputMaybe<NationalTestListRelationFilter>;
  OR?: InputMaybe<Array<SendNationalTestWhereInput>>;
  SendNationalTestClass?: InputMaybe<SendNationalTestClassListRelationFilter>;
  SendNationalTestSchoolFaculty?: InputMaybe<SendNationalTestSchoolFacultyListRelationFilter>;
  SendNationalTestSchoolYear?: InputMaybe<SendNationalTestSchoolYearListRelationFilter>;
  account?: InputMaybe<AccountRelationFilter>;
  accountId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  ended?: InputMaybe<BoolNullableFilter>;
  formTest?: InputMaybe<FormTestRelationFilter>;
  formTestId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  school?: InputMaybe<SchoolRelationFilter>;
  schoolId?: InputMaybe<StringFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  timeRestriction?: InputMaybe<BoolFilter>;
  totalTime?: InputMaybe<IntFilter>;
};

export type SendNationalTestsDetailModel = {
  __typename?: 'SendNationalTestsDetailModel';
  classIds: Array<Scalars['String']>;
  classNames: Array<Scalars['String']>;
  endDate: Scalars['DateTime'];
  facultyIds: Array<Scalars['String']>;
  formTestId: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  schoolFaculties: Array<Scalars['String']>;
  schoolId: Scalars['String'];
  schoolName: Scalars['String'];
  schoolYearIds: Array<Scalars['String']>;
  schoolYears: Array<Scalars['String']>;
  startDate: Scalars['DateTime'];
  timeRestriction: Scalars['Boolean'];
  totalTime: Scalars['Int'];
};

export type SendNationalTestsModel = {
  __typename?: 'SendNationalTestsModel';
  classNames: Array<Scalars['String']>;
  endDate: Scalars['DateTime'];
  ended: Scalars['Boolean'];
  faculties: Array<SendNationalTestFaculty>;
  id: Scalars['Int'];
  name: Scalars['String'];
  schoolFaculties: Array<Scalars['String']>;
  schoolId: Scalars['String'];
  schoolName: Scalars['String'];
  schoolYears: Array<Scalars['String']>;
  startDate: Scalars['DateTime'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type Statistic = {
  __typename?: 'Statistic';
  createdAt: Scalars['String'];
  sendMiniTestId: Scalars['Int'];
  startDate: Scalars['String'];
  statisticAccount: StatisticAccount;
  statisticAnswer: AnswerStatistic;
  statisticSection: StatisticSection;
  time?: Maybe<Scalars['Int']>;
};

export type StatisticAccount = {
  __typename?: 'StatisticAccount';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type StatisticSection = {
  __typename?: 'StatisticSection';
  id: Scalars['String'];
  name: Scalars['String'];
};

export enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StudentIndividualAnalysis = {
  __typename?: 'StudentIndividualAnalysis';
  code?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  subjects: Array<SubjectIndividualAnalysis>;
  totalParticipation: Scalars['Int'];
  totalParticipationSelfTest: Scalars['Int'];
};

export type StudentLatestTestHistory = {
  __typename?: 'StudentLatestTestHistory';
  studentMiniTestHistory?: Maybe<StudentMiniTestHistory>;
  studentNationalTestHistory?: Maybe<StudentNationalTestHistory>;
  studentSelfTestHistory?: Maybe<StudentSelfTestHistory>;
};

export type StudentMiniTestAnswerQuestion = {
  __typename?: 'StudentMiniTestAnswerQuestion';
  answerId: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  questionId: Scalars['String'];
};

export type StudentMiniTestHistory = {
  __typename?: 'StudentMiniTestHistory';
  date: Scalars['DateTime'];
  point: Scalars['Int'];
  totalPoint: Scalars['Int'];
};

export type StudentNationalTestHistory = {
  __typename?: 'StudentNationalTestHistory';
  date: Scalars['DateTime'];
  point: Scalars['Int'];
  totalPoint?: Maybe<Scalars['Int']>;
};

export type StudentNationalTestModel = {
  __typename?: 'StudentNationalTestModel';
  endDate: Scalars['DateTime'];
  finished: Scalars['Int'];
  name: Scalars['String'];
  nationalTestId: Scalars['Int'];
  remainTimes: Scalars['Int'];
  startDate: Scalars['DateTime'];
  timeRestriction: Scalars['Boolean'];
};

export type StudentQuestion = {
  __typename?: 'StudentQuestion';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isCorrect: Scalars['Boolean'];
  question: Question;
  updatedAt: Scalars['DateTime'];
};

export type StudentQuestionListRelationFilter = {
  every?: InputMaybe<StudentQuestionWhereInput>;
  none?: InputMaybe<StudentQuestionWhereInput>;
  some?: InputMaybe<StudentQuestionWhereInput>;
};

export type StudentQuestionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type StudentQuestionWhereInput = {
  AND?: InputMaybe<Array<StudentQuestionWhereInput>>;
  NOT?: InputMaybe<Array<StudentQuestionWhereInput>>;
  OR?: InputMaybe<Array<StudentQuestionWhereInput>>;
  account?: InputMaybe<AccountRelationFilter>;
  accountId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isCorrect?: InputMaybe<BoolFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringFilter>;
  subject?: InputMaybe<SubjectRelationFilter>;
  subjectId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type StudentSchoolAnalysis = {
  __typename?: 'StudentSchoolAnalysis';
  class: StudentSchoolClass;
  code?: Maybe<Scalars['String']>;
  firstLogin: Scalars['Boolean'];
  name: Scalars['String'];
  school: StudentSchoolSchool;
  subjects: Array<SubjectSchoolAnalysis>;
  totalParticipation: Scalars['Int'];
  totalParticipationSelfTest: Scalars['Int'];
  totalParticipationSelfTestPoint: Scalars['Int'];
};

export type StudentSchoolClass = {
  __typename?: 'StudentSchoolClass';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type StudentSchoolSchool = {
  __typename?: 'StudentSchoolSchool';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type StudentSelfTestHistory = {
  __typename?: 'StudentSelfTestHistory';
  date: Scalars['DateTime'];
  point: Scalars['Int'];
  totalPoint: Scalars['Int'];
};

export type StudentStatisticByMiniTest = {
  __typename?: 'StudentStatisticByMiniTest';
  formTest: FromTestS;
  questions: Array<QuestionS>;
  students: Array<StudentStatisticByMiniTestDto>;
};

export type StudentStatisticByMiniTestDto = {
  __typename?: 'StudentStatisticByMiniTestDto';
  answer: Array<StudentMiniTestAnswerQuestion>;
  code: Scalars['String'];
  finished: Scalars['Int'];
  name: Scalars['String'];
  point: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type StudentStatisticByMiniTestInput = {
  id: Scalars['Int'];
};

export type StudentSubjectListRelationFilter = {
  every?: InputMaybe<StudentSubjectWhereInput>;
  none?: InputMaybe<StudentSubjectWhereInput>;
  some?: InputMaybe<StudentSubjectWhereInput>;
};

export type StudentSubjectOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type StudentSubjectWhereInput = {
  AND?: InputMaybe<Array<StudentSubjectWhereInput>>;
  NOT?: InputMaybe<Array<StudentSubjectWhereInput>>;
  OR?: InputMaybe<Array<StudentSubjectWhereInput>>;
  account?: InputMaybe<AccountRelationFilter>;
  accountId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  subject?: InputMaybe<SubjectRelationFilter>;
  subjectId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Subject = {
  __typename?: 'Subject';
  chapter?: Maybe<Array<Chapter>>;
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SubjectIndividualAnalysis = {
  __typename?: 'SubjectIndividualAnalysis';
  rank: Scalars['String'];
  subjectId: Scalars['String'];
  subjectName: Scalars['String'];
  totalCorrect: Scalars['Int'];
  totalInCorrect: Scalars['Int'];
  totalQuestion: Scalars['Int'];
};

export enum SubjectOrderByRelevanceFieldEnum {
  Code = 'code',
  Id = 'id',
  Name = 'name',
}

export type SubjectOrderByRelevanceInput = {
  fields: Array<SubjectOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type SubjectOrderByWithRelationAndSearchRelevanceInput = {
  QuestionTest?: InputMaybe<QuestionTestOrderByRelationAggregateInput>;
  SelfTrialQuestionStudent?: InputMaybe<SelfTrialQuestionStudentOrderByRelationAggregateInput>;
  SendMiniTest?: InputMaybe<SendMiniTestOrderByRelationAggregateInput>;
  StudentQuestion?: InputMaybe<StudentQuestionOrderByRelationAggregateInput>;
  SubjectSection?: InputMaybe<SubjectSectionOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<SubjectOrderByRelevanceInput>;
  chapter?: InputMaybe<ChapterOrderByRelationAggregateInput>;
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  question?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  studentSubject?: InputMaybe<StudentSubjectOrderByRelationAggregateInput>;
};

export type SubjectRelationFilter = {
  is?: InputMaybe<SubjectWhereInput>;
  isNot?: InputMaybe<SubjectWhereInput>;
};

export enum SubjectScalarFieldEnum {
  Code = 'code',
  Id = 'id',
  Name = 'name',
}

export type SubjectSchoolAnalysis = {
  __typename?: 'SubjectSchoolAnalysis';
  rank: Scalars['String'];
  subjectId: Scalars['String'];
  subjectName: Scalars['String'];
  totalCorrect: Scalars['Int'];
  totalInCorrect: Scalars['Int'];
  totalQuestion: Scalars['Int'];
};

export type SubjectSectionListRelationFilter = {
  every?: InputMaybe<SubjectSectionWhereInput>;
  none?: InputMaybe<SubjectSectionWhereInput>;
  some?: InputMaybe<SubjectSectionWhereInput>;
};

export type SubjectSectionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SubjectSectionWhereInput = {
  AND?: InputMaybe<Array<SubjectSectionWhereInput>>;
  NOT?: InputMaybe<Array<SubjectSectionWhereInput>>;
  OR?: InputMaybe<Array<SubjectSectionWhereInput>>;
  id?: InputMaybe<StringFilter>;
  section?: InputMaybe<SectionRelationFilter>;
  sectionId?: InputMaybe<StringFilter>;
  subject?: InputMaybe<SubjectRelationFilter>;
  subjectId?: InputMaybe<StringFilter>;
};

export type SubjectWhereInput = {
  AND?: InputMaybe<Array<SubjectWhereInput>>;
  NOT?: InputMaybe<Array<SubjectWhereInput>>;
  OR?: InputMaybe<Array<SubjectWhereInput>>;
  QuestionTest?: InputMaybe<QuestionTestListRelationFilter>;
  SelfTrialQuestionStudent?: InputMaybe<SelfTrialQuestionStudentListRelationFilter>;
  SendMiniTest?: InputMaybe<SendMiniTestListRelationFilter>;
  StudentQuestion?: InputMaybe<StudentQuestionListRelationFilter>;
  SubjectSection?: InputMaybe<SubjectSectionListRelationFilter>;
  chapter?: InputMaybe<ChapterListRelationFilter>;
  code?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  question?: InputMaybe<QuestionListRelationFilter>;
  studentSubject?: InputMaybe<StudentSubjectListRelationFilter>;
};

export type SubjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type SubmitMiniTestInput = {
  miniTestId: Scalars['Int'];
  questions: Array<QuestionMiniTestInput>;
};

export type SubmitNationalTestQuestionInput = {
  nationalTestId: Scalars['Int'];
  questions: Array<NationalQuestionInput>;
};

export type SubmitQuestionAiInput = {
  aiTestId: Scalars['Int'];
  questions: Array<QuestionInput>;
};

export type SubmitSelfTrialQuestionInput = {
  questions: Array<SelfTrialQuestionInput>;
  selfTrialId: Scalars['Int'];
};

export type TokenResponse = {
  __typename?: 'TokenResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export enum Type {
  Image = 'IMAGE',
  Text = 'TEXT',
}

export type UpdateAdminInput = {
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRole>;
  schoolId?: InputMaybe<Scalars['String']>;
};

export type UpdateClassInput = {
  accountId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  schoolFacultyId?: InputMaybe<Scalars['String']>;
  schoolId?: InputMaybe<Scalars['String']>;
  schoolYearId?: InputMaybe<Scalars['String']>;
};

export type UpdateMiniTestInput = {
  name: Scalars['String'];
  questionId?: InputMaybe<Array<Scalars['String']>>;
  sectionId: Scalars['String'];
  semester?: InputMaybe<FormTestSemester>;
  time?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['String']>;
};

export type UpdateNationalTestInput = {
  id: Scalars['String'];
  name: Scalars['String'];
  questionIds: Array<Scalars['String']>;
};

export type UpdateQuestionInput = {
  answers?: InputMaybe<CreateManyAnswerInput>;
  categoryId?: InputMaybe<Scalars['String']>;
  chapterId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  identityNumber?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  public?: InputMaybe<QuestionPublic>;
  subjectId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<QuestionType>;
};

export type UpdateSendMiniTestInput = {
  classId?: InputMaybe<Array<Scalars['String']>>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  extendDate?: InputMaybe<Scalars['DateTime']>;
  facultyId?: InputMaybe<Array<Scalars['String']>>;
  formTestId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  schoolId?: InputMaybe<Scalars['String']>;
  schoolYearId?: InputMaybe<Scalars['String']>;
  sectionId?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  subjectId?: InputMaybe<Scalars['String']>;
};

export type UpdateSendNationalTestInput = {
  classIds: Array<Scalars['String']>;
  endDate: Scalars['DateTime'];
  formTestId: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  schoolFacultyIds: Array<Scalars['String']>;
  schoolId: Scalars['String'];
  schoolYearIds: Array<Scalars['String']>;
  startDate: Scalars['DateTime'];
  timeRestriction: Scalars['Boolean'];
  totalTime: Scalars['Int'];
};

export type UpdateStudentInput = {
  classId?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  schoolFacultyId?: InputMaybe<Scalars['String']>;
  schoolId?: InputMaybe<Scalars['String']>;
  schoolYearId?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  class?: Maybe<Class>;
  classId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identityNumber?: Maybe<Scalars['String']>;
  isStatistical?: Maybe<Scalars['Boolean']>;
  passwordHash?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  role: UserRole;
  school?: Maybe<School>;
  schoolFaculty?: Maybe<SchoolFaculty>;
  schoolFacultyId?: Maybe<Scalars['String']>;
  schoolId?: Maybe<Scalars['String']>;
  schoolYear?: Maybe<SchoolYear>;
  schoolYearId?: Maybe<Scalars['String']>;
  status: Status;
  updatedAt: Scalars['DateTime'];
};

/** Role */
export enum UserRole {
  AdminApp = 'ADMIN_APP',
  AdminNational = 'ADMIN_NATIONAL',
  FormTeacher = 'FORM_TEACHER',
  SchoolManager = 'SCHOOL_MANAGER',
  Student = 'STUDENT',
  Teacher = 'TEACHER',
}

export type ValidateResetCodeInput = {
  code: Scalars['String'];
  email: Scalars['String'];
};

export type WhereMiniTestUniqueInput = {
  id: Scalars['String'];
};

export type WhereSchoolYearsInput = {
  schoolFacultyId?: InputMaybe<Scalars['String']>;
  schoolId: Scalars['String'];
};

/** Status */
export enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}
