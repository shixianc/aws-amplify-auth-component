/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCredential = /* GraphQL */ `
  subscription OnCreateCredential {
    onCreateCredential {
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
export const onUpdateCredential = /* GraphQL */ `
  subscription OnUpdateCredential {
    onUpdateCredential {
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
export const onDeleteCredential = /* GraphQL */ `
  subscription OnDeleteCredential {
    onDeleteCredential {
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
export const onCreateFacilityProfile = /* GraphQL */ `
  subscription OnCreateFacilityProfile {
    onCreateFacilityProfile {
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
export const onUpdateFacilityProfile = /* GraphQL */ `
  subscription OnUpdateFacilityProfile {
    onUpdateFacilityProfile {
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
export const onDeleteFacilityProfile = /* GraphQL */ `
  subscription OnDeleteFacilityProfile {
    onDeleteFacilityProfile {
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
export const onCreateProfessionalProfile = /* GraphQL */ `
  subscription OnCreateProfessionalProfile {
    onCreateProfessionalProfile {
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
export const onUpdateProfessionalProfile = /* GraphQL */ `
  subscription OnUpdateProfessionalProfile {
    onUpdateProfessionalProfile {
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
export const onDeleteProfessionalProfile = /* GraphQL */ `
  subscription OnDeleteProfessionalProfile {
    onDeleteProfessionalProfile {
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
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
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
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
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
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
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
