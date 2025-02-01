export const COLUMNS_TABLE = [
    {
        title: 'State Name',
        dataIndex: 'State',
        key: 'State',
        align: 'center',
    },
    {
        title: 'Total Population',
        dataIndex: 'Population',
        key: 'Population',
        align: 'center',
    },
    {
        title: 'Number of Foreign-Born Citizens',
        dataIndex: 'Foreign-Born Citizens',
        key: 'Foreign-Born Citizens',
        align: 'center',
    },
    {
        title: 'Foreign-Born Citizens % of Total',
        dataIndex: 'Foreign-Born Citizens % of Total',
        key: 'Foreign-Born Citizens % of Total',
        align: 'center',
    },
];

export const DATA_TABLE = {
    Population: {
        label: 'Population',
        backgroundColor:'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
    },
    Citizens: {
        label: 'Foreign Citizens',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
    }
}
