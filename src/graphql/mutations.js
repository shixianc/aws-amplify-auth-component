/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCredential = /* GraphQL */ `
  mutation CreateCredential(
    $input: CreateCredentialInput!
    $condition: ModelCredentialConditionInput
  ) {
    createCredential(input: $input, condition: $condition) {
      user {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      id
      credentialName
      isVerified
      expierationDate
    }
  }
`;
export const updateCredential = /* GraphQL */ `
  mutation UpdateCredential(
    $input: UpdateCredentialInput!
    $condition: ModelCredentialConditionInput
  ) {
    updateCredential(input: $input, condition: $condition) {
      user {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      id
      credentialName
      isVerified
      expierationDate
    }
  }
`;
export const deleteCredential = /* GraphQL */ `
  mutation DeleteCredential(
    $input: DeleteCredentialInput!
    $condition: ModelCredentialConditionInput
  ) {
    deleteCredential(input: $input, condition: $condition) {
      user {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      id
      credentialName
      isVerified
      expierationDate
    }
  }
`;
export const createFacilityProfile = /* GraphQL */ `
  mutation CreateFacilityProfile(
    $input: CreateFacilityProfileInput!
    $condition: ModelFacilityProfileConditionInput
  ) {
    createFacilityProfile(input: $input, condition: $condition) {
      id
      user {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      about
      rating
      license
      jobs {
        nextToken
      }
      reviews {
        nextToken
      }
      practiceName
      isVerified
    }
  }
`;
export const updateFacilityProfile = /* GraphQL */ `
  mutation UpdateFacilityProfile(
    $input: UpdateFacilityProfileInput!
    $condition: ModelFacilityProfileConditionInput
  ) {
    updateFacilityProfile(input: $input, condition: $condition) {
      id
      user {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      about
      rating
      license
      jobs {
        nextToken
      }
      reviews {
        nextToken
      }
      practiceName
      isVerified
    }
  }
`;
export const deleteFacilityProfile = /* GraphQL */ `
  mutation DeleteFacilityProfile(
    $input: DeleteFacilityProfileInput!
    $condition: ModelFacilityProfileConditionInput
  ) {
    deleteFacilityProfile(input: $input, condition: $condition) {
      id
      user {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      about
      rating
      license
      jobs {
        nextToken
      }
      reviews {
        nextToken
      }
      practiceName
      isVerified
    }
  }
`;
export const createProfessionalProfile = /* GraphQL */ `
  mutation CreateProfessionalProfile(
    $input: CreateProfessionalProfileInput!
    $condition: ModelProfessionalProfileConditionInput
  ) {
    createProfessionalProfile(input: $input, condition: $condition) {
      id
      user {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      firstName
      lastName
      yearsOfExperience
      workExperience {
        id
        startDate
        endDate
        isCurrentJob
        title
        company
      }
      education {
        id
        school
        degree
        graduationDate
        isCurrentStudent
      }
      rating
      credentials {
        id
        credentialName
        isVerified
        expierationDate
      }
      jobs {
        nextToken
      }
      reviews {
        nextToken
      }
      isVerified
      specialties
    }
  }
`;
export const updateProfessionalProfile = /* GraphQL */ `
  mutation UpdateProfessionalProfile(
    $input: UpdateProfessionalProfileInput!
    $condition: ModelProfessionalProfileConditionInput
  ) {
    updateProfessionalProfile(input: $input, condition: $condition) {
      id
      user {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      firstName
      lastName
      yearsOfExperience
      workExperience {
        id
        startDate
        endDate
        isCurrentJob
        title
        company
      }
      education {
        id
        school
        degree
        graduationDate
        isCurrentStudent
      }
      rating
      credentials {
        id
        credentialName
        isVerified
        expierationDate
      }
      jobs {
        nextToken
      }
      reviews {
        nextToken
      }
      isVerified
      specialties
    }
  }
`;
export const deleteProfessionalProfile = /* GraphQL */ `
  mutation DeleteProfessionalProfile(
    $input: DeleteProfessionalProfileInput!
    $condition: ModelProfessionalProfileConditionInput
  ) {
    deleteProfessionalProfile(input: $input, condition: $condition) {
      id
      user {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      firstName
      lastName
      yearsOfExperience
      workExperience {
        id
        startDate
        endDate
        isCurrentJob
        title
        company
      }
      education {
        id
        school
        degree
        graduationDate
        isCurrentStudent
      }
      rating
      credentials {
        id
        credentialName
        isVerified
        expierationDate
      }
      jobs {
        nextToken
      }
      reviews {
        nextToken
      }
      isVerified
      specialties
    }
  }
`;
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
      id
      poster {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      professionalClass
      startDate
      endDate
      statTime
      endTime
      status
      applications {
        nextToken
      }
      hired {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      cost
    }
  }
`;
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
      id
      poster {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      professionalClass
      startDate
      endDate
      statTime
      endTime
      status
      applications {
        nextToken
      }
      hired {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      cost
    }
  }
`;
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
      id
      poster {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      professionalClass
      startDate
      endDate
      statTime
      endTime
      status
      applications {
        nextToken
      }
      hired {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      cost
    }
  }
`;
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      author {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      posting {
        id
        professionalClass
        startDate
        endDate
        statTime
        endTime
        status
        cost
      }
      rating
      highlights
      description
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      author {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      posting {
        id
        professionalClass
        startDate
        endDate
        statTime
        endTime
        status
        cost
      }
      rating
      highlights
      description
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      author {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      posting {
        id
        professionalClass
        startDate
        endDate
        statTime
        endTime
        status
        cost
      }
      rating
      highlights
      description
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      phone
      address
      zipcode
      OnboardStatus
      city
      state
      picture {
        bucket
        region
        key
      }
      userClass
      facilityProfile {
        id
        about
        rating
        license
        practiceName
        isVerified
      }
      professionalProfile {
        id
        firstName
        lastName
        yearsOfExperience
        rating
        isVerified
        specialties
      }
      credentialName {
        id
        credentialName
        isVerified
        expierationDate
      }
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      phone
      address
      zipcode
      OnboardStatus
      city
      state
      picture {
        bucket
        region
        key
      }
      userClass
      facilityProfile {
        id
        about
        rating
        license
        practiceName
        isVerified
      }
      professionalProfile {
        id
        firstName
        lastName
        yearsOfExperience
        rating
        isVerified
        specialties
      }
      credentialName {
        id
        credentialName
        isVerified
        expierationDate
      }
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      phone
      address
      zipcode
      OnboardStatus
      city
      state
      picture {
        bucket
        region
        key
      }
      userClass
      facilityProfile {
        id
        about
        rating
        license
        practiceName
        isVerified
      }
      professionalProfile {
        id
        firstName
        lastName
        yearsOfExperience
        rating
        isVerified
        specialties
      }
      credentialName {
        id
        credentialName
        isVerified
        expierationDate
      }
      owner
    }
  }
`;
