/* There are 3 main modalities for aggregation
    1. Pipeline Aggregation
    2. Map-Reduce Aggregation
    3. Single Purpose Aggregation
    
    Reference: https://www.youtube.com/watch?v=8xiA4i4eepE
*/

// Pipeline Aggregation
// Groups values from multiple documents, Performs operation on grouped data, returns single result like SQl group by and Having
dn.gdp.aggregate(
    {$group: { _id: "$country", gdp: { $sum: "$gdp" } } }, //1st
    {$match: { gdp: { $gte: 2500 } } }, //2nd
    {$sort: { gdp: -1 } } //3rd
);


// Map-Reduce Aggregation
// MAP -> Reduce -> Finalize
// Map - Map function returns values in key-value pairs
// Reduce: Collects and condenses the aggregated data
// Finalize: further condenses or processes the result

db.orders.mapReduce(
    function() { emit(this.cust_id, this.amount); }, //Map
    function(key, value) { return Array.sum(values); }, //Reduce
    {
        query: { status: "A" },
        out: "order_totals"
    }
)



// Single Purpose Aggregation (count, Distinct, Group)
// Limited in scope
db.customers.find().count()

db.customers.find({gender: "M"}).count()

db.customers.distinct("status")

db.customers.distinct("status").sort()

db.customers.group({key: { cuuntry: 1 }, reduce: function(cur, result) { result.val += cur.accnt_balance }, initial: { bal: 0 } } )