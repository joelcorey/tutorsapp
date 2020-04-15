const questions = [
    {
        question: '3 + 4',
        answers: [
            '1',
            '0',
            '-1',
            '7'
            ],
        correct: '7',
        quesionId: '0001'
    },
    {
        question: '200 + 100',
        answers: [
            '300',
            '200',
            '100',
            '560'
            ],
        correct: '300',
        quesionId: '0002'
    },
    {
        question: '15 + 17',
        answers: [
            '32',
            '42',
            '37',
            '5'
            ],
        correct: '32',
        quesionId: '0003'
    },
    {
        question: '5 + 9',
        answers: [
            '23',
            '4',
            '44',
            '14'
            ],
        correct: '14',
        quesionId: '0004'
    },
    {
        question: '1,025,612 + 1',
        answers: [
            '1,025,612',
            '1,025,613',
            '1,025,614',
            '1,025,615'
            ],
        correct: '1,025,613',
        quesionId: '0005'
    },
    {
        question: '0 + 23',
        answers: [
            '5',
            '25',
            '23',
            '15'
            ],
        correct: '23',
        quesionId: '0006'
    },
    {
        question: '25 + 21',
        answers: [
            '26',
            '34',
            '46',
            '64'
            ],
        correct: '46',
        quesionId: '0007'
    },
    {
        question: '96 + 5',
        answers: [
            '101',
            '4',
            '114',
            '100'
            ],
        correct: '101',
        quesionId: '0008'
    },
    {
        question: '12 + 13',
        answers: [
            '30',
            '27',
            '23',
            '25'
            ],
        correct: '25',
        quesionId: '0009'
    },
    {
        question: '17 + 3',
        answers: [
            '21',
            '20',
            '17',
            '73'
            ],
        correct: '20',
        quesionId: '0010'
    },
    {
        question: '45 + 23',
        answers: [
            '61',
            '76',
            '57',
            '68'
            ],
        correct: '68',
        quesionId: '0011'
    },
    {
        question: '18 + 19',
        answers: [
            '37',
            '26',
            '73',
            '21'
            ],
        correct: '37',
        quesionId: '0012'
    },
    {
        question: '41 + 5',
        answers: [
            '4',
            '46',
            '47',
            '51'
            ],
        correct: '46',
        quesionId: '0013'
    },
    {
        question: '63 + 7',
        answers: [
            '65',
            '70',
            '85',
            '67'
            ],
        correct: '70',
        quesionId: '0014'
    },
    {
        question: '-7 + 5',
        answers: [
            '11',
            '24',
            '2',
            '12'
            ],
        correct: '2',
        quesionId: '0015'
    },
    {
        question: '16 + 16',
        answers: [
            '32',
            '30',
            '26',
            '24'
            ],
        correct: '32',
        quesionId: '0016'
    },
    {
        question: '21 + 500',
        answers: [
            '125',
            '521',
            '500',
            '532'
            ],
        correct: '521',
        quesionId: '0017'
    },
    {
        question: '1 + 4',
        answers: [
            '5',
            '3',
            '4',
            '7'
            ],
        correct: '5',
        quesionId: '0018'
    },
    {
        question: '0 + 0',
        answers: [
            '1',
            '0',
            '2',
            '-1'
            ],
        correct: '0',
        quesionId: '0019'
    },
    {
        question: '0 + 27',
        answers: [
            '0',
            '30',
            '-1',
            '27'
            ],
        correct: '27',
        quesionId: '0020'
    },
]

const AddQuestionsService = questions.sort(() => 0.5 - Math.random()).slice(0,10)
export default AddQuestionsService;