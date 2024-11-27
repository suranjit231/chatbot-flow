const operatorOptions = {
    tag: [
      { name: "has any of the following", operator: "in", value: [] },
      { name: "not in", operator: "not_in", value: [] },
    ],
    string: [
        { name: "IS", operator: "is", value: "" },
        { name: "is not", operator: "is_not", value: "" },
        { name: "Contains", operator: "contains", value: "" },
        { name: "Not Contains", operator: "not_contains", value: "" },
        { name: "Start with", operator: "starts_with", value: "" },
        { name: "End with", operator: "ends_with", value: "" },
        { name: "Match Pattern", operator: "match_pattern", value: "" },
        { name: "has any value", operator: "has_any_value", value: null },
        { name: "is empty", operator: "is_empty", value: null },
    ],
    number: [
        {
          name: "equal to",
          operator: "equal_to",
          value: 0, 
        },
        {
          name: "not equal to",
          operator: "not_equal_to",
          value: 0, 
        },
        {
          name: "greater than",
          operator: "greater_than",
          value: 0, 
        },
        {
          name: "greater than or equal to",
          operator: "greater_than_or_equal_to",
          value: 0, 
        },
        {
          name: "less than",
          operator: "less_than",
          value: 0,
        },
        {
          name: "less than or equal to",
          operator: "less_than_or_equal_to",
          value: 0, 
        },
        {
          name: "has any value",
          operator: "has_any_value",
          value: null, 
        },
        {
          name: "is empty",
          operator: "is_empty",
          value: null, 
        },
      ],
    date: [
            { name: "after", operator: "after", value: "" }, 
            { name: "before", operator: "before", value: "" },
            { name: "on", operator: "on", value: "" },
            { name: "between", operator: "between", value: [] }, 
            { name: "after x days ago", operator: "after_x_days_ago", value: null },
            { name: "before x days ago", operator: "before_x_days_ago", value: null },
            { name: "is Monday", operator: "is_monday", value: null },
            { name: "is Tuesday", operator: "is_tuesday", value: null },
            { name: "is Wednesday", operator: "is_wednesday", value: null },
            { name: "is Thursday", operator: "is_thursday", value: null },
            { name: "is Friday", operator: "is_friday", value: null },
            { name: "is Saturday", operator: "is_saturday", value: null },
            { name: "is Sunday", operator: "is_sunday", value: null },
            { name: "is weekday", operator: "is_weekday", value: null },
            { name: "is weekend", operator: "is_weekend", value: null },
            { name: "has any value", operator: "has_any_value", value: null },
            { name: "is empty", operator: "is_empty", value: null },
        ],
    customUserFields: [
      { name: "is", operator: "is", value: "" },
      { name: "is not", operator: "is_not", value: "" },
      { name: "contains", operator: "contains", value: "" },
      { name: "greater than", operator: "greater_than", value: null },
      { name: "less than", operator: "less_than", value: null },
    ],

    cart:[
        {
          name: "is empty",
          operator: "is_empty",
          value: null,
        },
        {
          name: "items count equal to",
          operator: "items_count_equal_to",
          value: 0,
        },
        {
          name: "items count not equal to",
          operator: "items_count_not_equal_to",
          value: 0,
        },
        {
          name: "items count greater than",
          operator: "items_count_greater_than",
          value: 0, 
        },
        {
          name: "items count greater than or equal to",
          operator: "items_count_greater_than_or_equal_to",
          value: 0,
        },
        {
          name: "items count less than",
          operator: "items_count_less_than",
          value: 0, 
        },
        {
          name: "items count less than or equal to",
          operator: "items_count_less_than_or_equal_to",
          value: 0, 
        },
        {
          name: "has item matched with value",
          operator: "has_item_matched_with_value",
          value: "", 
        },
        {
          name: "has item matched with key value",
          operator: "has_item_matched_with_key_value",
          value: "", 
        },
        {
          name: "has item matched with key",
          operator: "has_item_matched_with_key",
          value: "", 
        },
      ],

      gender: [
        { name: "Is", operator: "is", value: "" },
        { name: "Is not", operator: "is_not", value: "" },
        { name: "Has any value", operator: "has_any_value", value: null },
        { name: "Is empty", operator: "is_empty", value: null }
      ]
      

  };



  export default operatorOptions;




  // const [ conditionalGroup, setConditionalGroup ] = useState({
  //   conditionalGroupName:"",
  //   goto:"",
  //   conditions:[] 
  // })

  // const [condition, setCondition ] = useState({
  //     variableName:"",
  //     validation:{
  //       contains: false,
  //       greater_then: false,
  //       greater_than_or_equal_to:false,
  //       less_then:false,
  //       equal_to: false,
  //       less_than_or_equal_to:false,
  //       isEmpty:false,
  //       has_any_value:false,
  //       isMatched:{
  //           isRequired:false,
  //           pattern:""
  //       },

  //       not_equal_to:false,


    

  //     }
  // })