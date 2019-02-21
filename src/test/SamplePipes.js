const SamplePipes = [
    {
        id: 1,
        type: 'pipe',
        OD: 5,
        wall: 0.25,
        ppf: 19.5,
        strType: 'yield',
        strength: 130
    },{
        id: 2,
        type: 'pipe',
        OD: 4.5,
        wall: 0.2,
        ppf: 10.5,
        strType: 'yield',
        strength: 130
    },{
        id: 3,
        type: 'casing',
        OD: 16,
        wall: 0.2,
        ppf: 25,
        strType: 'grade',
        strength: 85
    },{
        id: 4,
        type: 'wireline',
        OD: .75,
        strType: 'breaking',
        strength: 35
    },{
        id: 5,
        type: 'combo',
        combine: [1,3]
    }    
];
        
        
export default SamplePipes;