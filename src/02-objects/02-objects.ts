type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

const student: StudentType = {
    id: 1,
    name: 'vovich',
    age: 20,
    isActive: false,
    address: {
        streetTitle: 'Surganova',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }

    },
    technologies: [
        {
            id: 1,
            title: 'html'
        },
        {
            id: 2,
            title: 'css'
        },
        {
            id: 3,
            title: 'react'
        },
    ]
}

console.log(student.age)
console.log(student.isActive)
console.log(student.address.city.title)

console.log(student.technologies[2].title)
