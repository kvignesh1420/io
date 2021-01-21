window.BENCHMARK_DATA = {
  "lastUpdate": 1611249334170,
  "repoUrl": "https://github.com/kvignesh1420/io",
  "entries": {
    "Tensorflow-IO Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb9e6284182cfccdaa207ff118308109124bf44b",
          "message": "Merge pull request #1 from kvignesh1420/benchmarks-deps\n\n[Benchmarks] Test gh-pages deployment",
          "timestamp": "2021-01-19T00:59:18+05:30",
          "tree_id": "08e90708e7a2b56ce5ee09ae6475345ecca503a5",
          "url": "https://github.com/kvignesh1420/io/commit/cb9e6284182cfccdaa207ff118308109124bf44b"
        },
        "date": 1610998665101,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.491048191737148,
            "unit": "iter/sec",
            "range": "stddev: 0.05557261686771086",
            "extra": "mean: 286.44691939998665 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 27.602087493657056,
            "unit": "iter/sec",
            "range": "stddev: 0.0006501719182594938",
            "extra": "mean: 36.22914390912642 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2308909700523352,
            "unit": "iter/sec",
            "range": "stddev: 0.06376505732577742",
            "extra": "mean: 812.4196409999513 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2405368222627748,
            "unit": "iter/sec",
            "range": "stddev: 0.061047363578351",
            "extra": "mean: 806.1026339999898 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.25618867411407,
            "unit": "iter/sec",
            "range": "stddev: 0.0618458229784269",
            "extra": "mean: 796.058761400036 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4856326729513054,
            "unit": "iter/sec",
            "range": "stddev: 0.07242107018808783",
            "extra": "mean: 2.0591695240000263 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.37472102685618164,
            "unit": "iter/sec",
            "range": "stddev: 0.07001756043549444",
            "extra": "mean: 2.66865195259993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6847729941895213,
            "unit": "iter/sec",
            "range": "stddev: 0.02005692189843298",
            "extra": "mean: 1.460337963800066 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.438880257780524,
            "unit": "iter/sec",
            "range": "stddev: 0.05761366558549882",
            "extra": "mean: 290.7923292000305 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.031613377479741,
            "unit": "iter/sec",
            "range": "stddev: 0.071097431137356",
            "extra": "mean: 492.2196373999668 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9788885833483763,
            "unit": "iter/sec",
            "range": "stddev: 0.0701332347482097",
            "extra": "mean: 505.3341600000294 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8367826313551407,
            "unit": "iter/sec",
            "range": "stddev: 0.070336847800259",
            "extra": "mean: 544.430235200025 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 22.19742858240145,
            "unit": "iter/sec",
            "range": "stddev: 0.001536505222163243",
            "extra": "mean: 45.05026319998251 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5233.051842334429,
            "unit": "iter/sec",
            "range": "stddev: 0.00003276976326204323",
            "extra": "mean: 191.09308107941595 usec\nrounds: 2257"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3742.191987402714,
            "unit": "iter/sec",
            "range": "stddev: 0.00003024912337500994",
            "extra": "mean: 267.2230616083529 usec\nrounds: 2451"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 883.1035847310947,
            "unit": "iter/sec",
            "range": "stddev: 0.0002630992229625104",
            "extra": "mean: 1.1323699929318034 msec\nrounds: 849"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 484.1565689188921,
            "unit": "iter/sec",
            "range": "stddev: 0.00011696312303605069",
            "extra": "mean: 2.0654475518796978 msec\nrounds: 453"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1546.5830888398486,
            "unit": "iter/sec",
            "range": "stddev: 0.00007678446069803498",
            "extra": "mean: 646.5866639923876 usec\nrounds: 997"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 673.5160001020761,
            "unit": "iter/sec",
            "range": "stddev: 0.0000868882723923423",
            "extra": "mean: 1.48474572222255 msec\nrounds: 396"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1106.3071156390843,
            "unit": "iter/sec",
            "range": "stddev: 0.00005249421964816356",
            "extra": "mean: 903.9081335225133 usec\nrounds: 719"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb9e6284182cfccdaa207ff118308109124bf44b",
          "message": "Merge pull request #1 from kvignesh1420/benchmarks-deps\n\n[Benchmarks] Test gh-pages deployment",
          "timestamp": "2021-01-19T00:59:18+05:30",
          "tree_id": "08e90708e7a2b56ce5ee09ae6475345ecca503a5",
          "url": "https://github.com/kvignesh1420/io/commit/cb9e6284182cfccdaa207ff118308109124bf44b"
        },
        "date": 1610998732331,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.684593713977604,
            "unit": "iter/sec",
            "range": "stddev: 0.04430136755121437",
            "extra": "mean: 271.4003436000212 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 27.04829316602385,
            "unit": "iter/sec",
            "range": "stddev: 0.001243284709017775",
            "extra": "mean: 36.97090954545439 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.376936956011252,
            "unit": "iter/sec",
            "range": "stddev: 0.05198720772097855",
            "extra": "mean: 726.2496627999781 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4193214926394746,
            "unit": "iter/sec",
            "range": "stddev: 0.07163650820136498",
            "extra": "mean: 704.5620073999771 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.3329224207203711,
            "unit": "iter/sec",
            "range": "stddev: 0.06112127363498862",
            "extra": "mean: 750.2312095999969 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5366656100329126,
            "unit": "iter/sec",
            "range": "stddev: 0.0657948321710283",
            "extra": "mean: 1.8633577059999653 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.40312209984538244,
            "unit": "iter/sec",
            "range": "stddev: 0.06761739116906143",
            "extra": "mean: 2.480638001200009 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7497430825389206,
            "unit": "iter/sec",
            "range": "stddev: 0.013822740132501985",
            "extra": "mean: 1.333790232000024 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.8090329623002277,
            "unit": "iter/sec",
            "range": "stddev: 0.055076197804702035",
            "extra": "mean: 262.53382679999504 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.171611015890867,
            "unit": "iter/sec",
            "range": "stddev: 0.0716532594839811",
            "extra": "mean: 460.48762539996915 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.017028702697969,
            "unit": "iter/sec",
            "range": "stddev: 0.06807519691846384",
            "extra": "mean: 495.77876540001853 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.9274638768229881,
            "unit": "iter/sec",
            "range": "stddev: 0.05694331389476755",
            "extra": "mean: 518.8164676000497 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 25.2652210261045,
            "unit": "iter/sec",
            "range": "stddev: 0.0015219432110033396",
            "extra": "mean: 39.58010099997864 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5778.368627730388,
            "unit": "iter/sec",
            "range": "stddev: 0.000019805833944215202",
            "extra": "mean: 173.05922560928366 usec\nrounds: 2296"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4173.016153867031,
            "unit": "iter/sec",
            "range": "stddev: 0.00002554383067816423",
            "extra": "mean: 239.63482601746574 usec\nrounds: 2437"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 987.5767493058692,
            "unit": "iter/sec",
            "range": "stddev: 0.00010050129915282569",
            "extra": "mean: 1.0125795293407451 msec\nrounds: 852"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 551.7421730710074,
            "unit": "iter/sec",
            "range": "stddev: 0.00020116511628692372",
            "extra": "mean: 1.812440753683883 msec\nrounds: 475"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1687.48303394588,
            "unit": "iter/sec",
            "range": "stddev: 0.00007261372475104122",
            "extra": "mean: 592.598550553529 usec\nrounds: 1266"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 771.1318232597779,
            "unit": "iter/sec",
            "range": "stddev: 0.00014337590318773576",
            "extra": "mean: 1.2967951390888472 msec\nrounds: 417"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1274.5074578967508,
            "unit": "iter/sec",
            "range": "stddev: 0.00007965626288517291",
            "extra": "mean: 784.6168288808956 usec\nrounds: 824"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c652bee06fbe3d86120a49d7f823491a85234db",
          "message": "Disable s3 macOS for now as docker is not working on GitHub Actions for macOS (#1277)\n\n* Revert \"[s3] add support for testing on macOS (#1253)\"\r\n\r\nThis reverts commit 81789bde99e62523ca4d9f460bb345c666902acd.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Update\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-19T08:23:38-08:00",
          "tree_id": "1f4ebd0d670b0eac026c20b6f881707acc9b0a05",
          "url": "https://github.com/kvignesh1420/io/commit/5c652bee06fbe3d86120a49d7f823491a85234db"
        },
        "date": 1611078318678,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.998816302388738,
            "unit": "iter/sec",
            "range": "stddev: 0.04535680364874089",
            "extra": "mean: 250.07400299999745 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 30.618461382920504,
            "unit": "iter/sec",
            "range": "stddev: 0.00024034626875577594",
            "extra": "mean: 32.66003433333253 msec\nrounds: 12"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.358490874071668,
            "unit": "iter/sec",
            "range": "stddev: 0.05321545241406406",
            "extra": "mean: 736.1109442000156 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.34707914881111,
            "unit": "iter/sec",
            "range": "stddev: 0.062349689125015095",
            "extra": "mean: 742.346877600005 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.3561590039277855,
            "unit": "iter/sec",
            "range": "stddev: 0.054711399280395756",
            "extra": "mean: 737.3766624000154 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5385873472374139,
            "unit": "iter/sec",
            "range": "stddev: 0.03282146931728121",
            "extra": "mean: 1.8567090465999967 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.41988431163200596,
            "unit": "iter/sec",
            "range": "stddev: 0.05744450047419427",
            "extra": "mean: 2.381608391400005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7638348071248686,
            "unit": "iter/sec",
            "range": "stddev: 0.016191064780096628",
            "extra": "mean: 1.3091835965999963 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.6835522472237083,
            "unit": "iter/sec",
            "range": "stddev: 0.0501738065970658",
            "extra": "mean: 271.4770778000229 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.2332095018067446,
            "unit": "iter/sec",
            "range": "stddev: 0.05623308733662727",
            "extra": "mean: 447.7860224000324 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9948337556017444,
            "unit": "iter/sec",
            "range": "stddev: 0.05645358423871867",
            "extra": "mean: 501.29490599999826 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.078608890035942,
            "unit": "iter/sec",
            "range": "stddev: 0.06440487658928923",
            "extra": "mean: 481.0909857999832 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 27.858738560924035,
            "unit": "iter/sec",
            "range": "stddev: 0.001507618332086264",
            "extra": "mean: 35.89537974998791 msec\nrounds: 8"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5888.690187800606,
            "unit": "iter/sec",
            "range": "stddev: 0.00001574401101266079",
            "extra": "mean: 169.81705066971688 usec\nrounds: 2684"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4023.632728662761,
            "unit": "iter/sec",
            "range": "stddev: 0.000016615063857872653",
            "extra": "mean: 248.5316298568697 usec\nrounds: 2599"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 979.0693999132537,
            "unit": "iter/sec",
            "range": "stddev: 0.00006982638609723183",
            "extra": "mean: 1.0213780556195513 msec\nrounds: 881"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 514.8827524101036,
            "unit": "iter/sec",
            "range": "stddev: 0.00010886540254634128",
            "extra": "mean: 1.94218974187642 msec\nrounds: 523"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1591.0454061004525,
            "unit": "iter/sec",
            "range": "stddev: 0.00003972231907453313",
            "extra": "mean: 628.5175747755271 usec\nrounds: 1237"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 723.9463872649139,
            "unit": "iter/sec",
            "range": "stddev: 0.00008287259800540408",
            "extra": "mean: 1.3813177572140707 msec\nrounds: 416"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1186.2238366129664,
            "unit": "iter/sec",
            "range": "stddev: 0.000047841000174074",
            "extra": "mean: 843.0112168840809 usec\nrounds: 853"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c652bee06fbe3d86120a49d7f823491a85234db",
          "message": "Disable s3 macOS for now as docker is not working on GitHub Actions for macOS (#1277)\n\n* Revert \"[s3] add support for testing on macOS (#1253)\"\r\n\r\nThis reverts commit 81789bde99e62523ca4d9f460bb345c666902acd.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Update\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-19T08:23:38-08:00",
          "tree_id": "1f4ebd0d670b0eac026c20b6f881707acc9b0a05",
          "url": "https://github.com/kvignesh1420/io/commit/5c652bee06fbe3d86120a49d7f823491a85234db"
        },
        "date": 1611078391997,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.7801408110013086,
            "unit": "iter/sec",
            "range": "stddev: 0.03394962914704293",
            "extra": "mean: 264.54040999999506 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 30.88254969253781,
            "unit": "iter/sec",
            "range": "stddev: 0.0003180052075030545",
            "extra": "mean: 32.380746083333634 msec\nrounds: 12"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.3484456510535145,
            "unit": "iter/sec",
            "range": "stddev: 0.052883169948141635",
            "extra": "mean: 741.5945901999976 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.3508346943199505,
            "unit": "iter/sec",
            "range": "stddev: 0.04780938967538579",
            "extra": "mean: 740.2830296000275 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.326271845050379,
            "unit": "iter/sec",
            "range": "stddev: 0.04978268492244799",
            "extra": "mean: 753.9932358000215 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5236329411074914,
            "unit": "iter/sec",
            "range": "stddev: 0.04759780023971768",
            "extra": "mean: 1.9097347043999662 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.408429361135874,
            "unit": "iter/sec",
            "range": "stddev: 0.05167215723061913",
            "extra": "mean: 2.448403800399956 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7503733660145907,
            "unit": "iter/sec",
            "range": "stddev: 0.01185158565983973",
            "extra": "mean: 1.3326699018 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.665741735754231,
            "unit": "iter/sec",
            "range": "stddev: 0.05464616862733885",
            "extra": "mean: 272.7960865999876 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.111098695129866,
            "unit": "iter/sec",
            "range": "stddev: 0.05779236811531943",
            "extra": "mean: 473.68699639998795 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.0356825503395175,
            "unit": "iter/sec",
            "range": "stddev: 0.055611890650507756",
            "extra": "mean: 491.2357281999675 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.0918302143096366,
            "unit": "iter/sec",
            "range": "stddev: 0.05581930432469333",
            "extra": "mean: 478.05027060001066 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 26.083015135131483,
            "unit": "iter/sec",
            "range": "stddev: 0.001167446889112617",
            "extra": "mean: 38.339125857159424 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5537.181827470642,
            "unit": "iter/sec",
            "range": "stddev: 0.000038157506538711604",
            "extra": "mean: 180.5972841706004 usec\nrounds: 2868"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3974.936825653404,
            "unit": "iter/sec",
            "range": "stddev: 0.000045476897244137064",
            "extra": "mean: 251.576325325779 usec\nrounds: 2456"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 919.5572653386528,
            "unit": "iter/sec",
            "range": "stddev: 0.00021034908887416595",
            "extra": "mean: 1.0874798532875731 msec\nrounds: 852"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 489.96176265248926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000927460707624628",
            "extra": "mean: 2.0409755948838417 msec\nrounds: 469"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1552.4282413272867,
            "unit": "iter/sec",
            "range": "stddev: 0.00006518547498506211",
            "extra": "mean: 644.1521568462484 usec\nrounds: 1205"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 705.0322134390971,
            "unit": "iter/sec",
            "range": "stddev: 0.00019930965200678485",
            "extra": "mean: 1.4183749067607438 msec\nrounds: 429"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1172.5395508577114,
            "unit": "iter/sec",
            "range": "stddev: 0.000059349908171555086",
            "extra": "mean: 852.849696429004 usec\nrounds: 728"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "171b826db86c7ea3792beb4ebde34cd5f1040521",
          "message": "remove docker based mongodb tests in macos (#1279)",
          "timestamp": "2021-01-20T08:40:36-08:00",
          "tree_id": "9efab47cc944423e5f301267aaaa1484f2fbadbd",
          "url": "https://github.com/kvignesh1420/io/commit/171b826db86c7ea3792beb4ebde34cd5f1040521"
        },
        "date": 1611249333776,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.9805845998957485,
            "unit": "iter/sec",
            "range": "stddev: 0.055024661734253105",
            "extra": "mean: 251.21938119998504 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 27.343515793464938,
            "unit": "iter/sec",
            "range": "stddev: 0.0015661971981878015",
            "extra": "mean: 36.57174181818267 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.395722146013028,
            "unit": "iter/sec",
            "range": "stddev: 0.07052076124531698",
            "extra": "mean: 716.4749824000182 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.3976810227157364,
            "unit": "iter/sec",
            "range": "stddev: 0.06970277350252023",
            "extra": "mean: 715.470829000003 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4432662575763566,
            "unit": "iter/sec",
            "range": "stddev: 0.07825608914134645",
            "extra": "mean: 692.872846399996 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5761479190699734,
            "unit": "iter/sec",
            "range": "stddev: 0.086390050375613",
            "extra": "mean: 1.7356653854000115 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4463785583379367,
            "unit": "iter/sec",
            "range": "stddev: 0.11781411826531185",
            "extra": "mean: 2.2402509737999936 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7673982135602484,
            "unit": "iter/sec",
            "range": "stddev: 0.0658000691885962",
            "extra": "mean: 1.3031044148000093 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 4.826572108146141,
            "unit": "iter/sec",
            "range": "stddev: 0.0008833214183139168",
            "extra": "mean: 207.18637940003646 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.441339957129914,
            "unit": "iter/sec",
            "range": "stddev: 0.08179772544759088",
            "extra": "mean: 409.61112240001967 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.5820161927405691,
            "unit": "iter/sec",
            "range": "stddev: 0.3550067143773905",
            "extra": "mean: 632.1047816000373 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.299036837920454,
            "unit": "iter/sec",
            "range": "stddev: 0.07769972696363608",
            "extra": "mean: 434.9647572000322 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 25.37588569927795,
            "unit": "iter/sec",
            "range": "stddev: 0.0029328589688453043",
            "extra": "mean: 39.40749150002887 msec\nrounds: 8"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6771.463517881874,
            "unit": "iter/sec",
            "range": "stddev: 0.000009925154508051075",
            "extra": "mean: 147.6785627448528 usec\nrounds: 2040"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4786.101578863052,
            "unit": "iter/sec",
            "range": "stddev: 0.000009966656252747496",
            "extra": "mean: 208.9383151449017 usec\nrounds: 2694"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1179.06277705313,
            "unit": "iter/sec",
            "range": "stddev: 0.00001232984203287119",
            "extra": "mean: 848.1312610846154 usec\nrounds: 1015"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 593.262218434704,
            "unit": "iter/sec",
            "range": "stddev: 0.000058898437485458786",
            "extra": "mean: 1.6855952880978256 msec\nrounds: 479"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1888.5060808742376,
            "unit": "iter/sec",
            "range": "stddev: 0.000025430340217802246",
            "extra": "mean: 529.5190786661775 usec\nrounds: 1411"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 863.0883025659824,
            "unit": "iter/sec",
            "range": "stddev: 0.00003083825289138204",
            "extra": "mean: 1.1586299999976548 msec\nrounds: 443"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1441.5930235361566,
            "unit": "iter/sec",
            "range": "stddev: 0.000014830407270464881",
            "extra": "mean: 693.6770528668691 usec\nrounds: 889"
          }
        ]
      }
    ]
  }
}