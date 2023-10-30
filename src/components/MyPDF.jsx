import React from 'react';
import { pdf, Font, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';




const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#007acc',
    color: '#fff',
  },
  headerCell: {
    flexGrow: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    padding: 5,
    borderBottom: 1,
    borderBottomColor: '#888',
  },
  cell: {
    flexGrow: 1,
    fontSize: 14,
  },
});

const MyPDF = ({tableData}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Data Tabel Vendor</Text>

        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>No.</Text>
          <Text style={styles.headerCell}>Nama Vendor</Text>
          <Text style={styles.headerCell}>No. Telp</Text>
          <Text style={styles.headerCell}>Email</Text>
          <Text style={styles.headerCell}>Alamat</Text>
        </View>

        {tableData.map((row, index) => (
          <View key={row.id} style={styles.row}>
            <Text style={styles.cell}>{index + 1}</Text>
            <Text style={styles.cell}>{row.name}</Text>
            <Text style={styles.cell}>{row.phoneNumber}</Text>
            <Text style={styles.cell}>{row.email}</Text>
            <Text style={styles.cell}>{row.address}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default MyPDF;
